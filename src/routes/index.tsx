import { ROUTE_CONSTANTS } from "@/lib/constants";
import Layout from "../layout";

import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import ErrorElement from "@/components/error-element";
import NotFound from "@/components/not-found";
import { AdminPage } from "@/pages/admin";
import { ForbiddenPage } from "@/pages/forbidden";
import { CreatePostPage } from "@/pages/create-post";
import blogRoutes from "./blog-routes";
import type { RouteObject } from "react-router";
import withGuards from "@/lib/utils/with-guards";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
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
      {
        path: ROUTE_CONSTANTS.FORBIDDEN,
        Component: ForbiddenPage,
      },
      {
        path: ROUTE_CONSTANTS.LOGIN,
        Component: withGuards(LoginPage, { mode: "auth" }),
      },
      blogRoutes,
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
