import type { RouteGuard, RouteMode } from "@/types/route-type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
import { ROUTE_CONSTANTS } from "../constants";
import { useAuth } from "@/hooks";

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
    const { isAuthenticated, hasPermission } = useAuth();

    if (mode === "private") {
      if (!isAuthenticated) {
        return <Navigate to={ROUTE_CONSTANTS.LOGIN} />;
      }

      if (options.guard && !hasPermission(options.guard)) {
        return <Navigate to={ROUTE_CONSTANTS.FORBIDDEN} />;
      }
    }

    if (mode === "auth" && isAuthenticated) {
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
