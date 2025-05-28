import type { UserRole, UserScope } from "./user-type";

export type RouteGuard = {
  roles?: UserRole[];
  scopes?: UserScope[];
};

export type RouteMode = "public" | "private" | "auth";
