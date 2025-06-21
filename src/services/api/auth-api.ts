import LOCAL_STORAGE_CONSTANTS from "@/lib/constants/local-storage-constants";
import httpService from "../http-service";
import type { User } from "@/types/user-type";
import { ROUTE_CONSTANTS } from "@/lib/constants";

export const login = async (email: string, password: string) => {
  await new Promise((res) => setTimeout(res, 500)); // simulate network delay

  if (email === "admin@gmail.com" && password === "password") {
    const token = createDummyJWT({
      id: "1",
      name: "Admin User",
      email,
      roles: ["admin"],
      scopes: ["read", "write", "delete"],
    });
    localStorage.setItem(LOCAL_STORAGE_CONSTANTS.TOKEN, token);
    httpService.injectAuthToken(token);
    return { success: true, token };
  } else if (email === "user@gmail.com" && password === "password") {
    const token = createDummyJWT({
      id: "2",
      name: "Regular User",
      email,
      roles: ["user"],
      scopes: ["read"],
    });
    localStorage.setItem(LOCAL_STORAGE_CONSTANTS.TOKEN, token);
    httpService.injectAuthToken(token);
    return { success: true, token };
  } else {
    return { success: false, message: "Invalid credentials" };
  }
};

// utils/auth.ts
export const createDummyJWT = (
  user: User = {
    id: "1",
    name: "John Doe",
    email: "2fB2y@example.com",
    roles: ["user"],
    scopes: ["read"], // Now an array
  }
) => {
  const header = { alg: "HS256", typ: "JWT" };
  const payload = {
    ...user,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
  };

  return [
    btoa(JSON.stringify(header)),
    btoa(JSON.stringify(payload)),
    "fake-signature",
  ].join(".");
};

export const logout = (navigate: (path: string) => void) => {
  localStorage.removeItem(LOCAL_STORAGE_CONSTANTS.TOKEN);
  httpService.removeAuthToken();
  navigate(ROUTE_CONSTANTS.LOGIN);
};
