import MainLayout from "@/components/layout/main-layout";
import { ROUTE_CONSTANTS } from "@/lib/constants";
import withGuards from "@/lib/utils/with-guards";
import { AdminPage } from "@/pages/admin";
import { CreatePostPage } from "@/pages/create-post";
import { HomePage } from "@/pages/home";
import type { RouteObject } from "react-router";

const mainRoutes: RouteObject = {
  // For Layout Routes, the path is not required.
  Component: MainLayout,
  children: [
    {
      index: true, // This will be the default route when the path is "/"
      Component: withGuards(HomePage, {
        guard: { roles: ["admin", "user", "guest"] },
      }),
    },
    {
      path: ROUTE_CONSTANTS.ADMIN,
      Component: withGuards(AdminPage, {
        guard: { roles: ["admin"] },
      }),
    },
    {
      path: ROUTE_CONSTANTS.CREATE_POST,
      Component: withGuards(CreatePostPage, {
        guard: { roles: ["user", "admin"], scopes: ["write"] },
      }),
    },
  ],
};

export default mainRoutes;
