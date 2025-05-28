import type { RouteGuard, RouteMode } from "@/models/route-type";
import { getCurrentUser, hasPermission } from "@/services/auth-service";

import type { ComponentType } from "react";
import { Navigate } from "react-router";
import { ROUTE_CONSTANTS } from "../constants";

type GuardOptions = {
  redirectPath?: string;
  mode?: RouteMode;
  guard?: RouteGuard;
};

const withGuards = <P extends object>(
  WrappedComponent: ComponentType<P> | null | undefined,
  options: GuardOptions
) => {
  const { mode = "private", redirectPath } = options;

  const GuardedRouteComponent = (props: P) => {
    const user = getCurrentUser();

    if (mode === "private") {
      if (!user) {
        return <Navigate to={ROUTE_CONSTANTS.LOGIN} />;
      }

      if (options.guard && !hasPermission(options.guard)) {
        return <Navigate to={ROUTE_CONSTANTS.FORBIDDEN} />;
      }
    }

    if (mode === "auth" && user) {
      return <Navigate to={redirectPath || "/"} />;
    }

    if (!WrappedComponent) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return GuardedRouteComponent;
};

export default withGuards;
