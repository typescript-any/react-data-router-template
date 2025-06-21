import AuthLayout from "@/components/layout/auth-layout";
import { ROUTE_CONSTANTS } from "@/lib/constants";
import withGuards from "@/lib/utils/with-guards";
import { LoginPage } from "@/pages/login";
import type { RouteObject } from "react-router";

const authRoutes: RouteObject = {
  // For Layout Routes, the path is not required.
  Component: AuthLayout,
  children: [
    {
      path: ROUTE_CONSTANTS.LOGIN,
      index: true,
      Component: withGuards(LoginPage, { mode: "auth" }),
    },
  ],
};

export default authRoutes;
