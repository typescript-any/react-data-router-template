import { ROUTE_CONSTANTS } from "@/lib/constants";
import Layout from "../layout";

import ErrorElement from "@/components/error-element";
import NotFound from "@/components/not-found";
import { ForbiddenPage } from "@/pages/forbidden";
import blogRoutes from "./blog-routes";
import type { RouteObject } from "react-router";
import authRoutes from "./auth-routes";

import mainRoutes from "./main-routes";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorElement />,
    children: [
      authRoutes,
      mainRoutes,
      blogRoutes,
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
