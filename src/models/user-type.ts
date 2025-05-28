export type UserRole = "admin" | "user" | "guest";
export type UserScope = "read" | "write" | "delete";
export type User = {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  scopes: UserScope[];
};

export type AuthTokenPayload = User & {
  exp: number;
};
