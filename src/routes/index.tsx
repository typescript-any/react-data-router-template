import { ROUTE_CONSTANTS } from "@/lib/constants";
import Layout from "../layout";

import ErrorElement from "@/components/error-element";
import NotFound from "@/components/not-found";
import { ForbiddenPage } from "@/pages/forbidden";
import type { RouteObject } from "react-router";
import authRoutes from "./auth-routes";
import MainLayout from "@/components/layout/main-layout";
import withGuards from "@/lib/utils/with-guards";
import { AdminPage } from "@/pages/admin";
import { CreatePostPage } from "@/pages/create-post";
import { HomePage } from "@/pages/home";
import ThemeDemo from "@/components/theme-demo";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorElement />,
    children: [
      authRoutes,
      {
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
            path: "/theme-demo",
            Component: withGuards(ThemeDemo, {
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
      },
      {
        path: ROUTE_CONSTANTS.FORBIDDEN,
        Component: ForbiddenPage,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
