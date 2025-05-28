import type { RouteObject } from "react-router";

const blogRoutes: RouteObject = {
  path: "blogs",
  children: [
    {
      path: ":id",
      element: <div>blog details page</div>,
    },
  ],
};

export default blogRoutes;
