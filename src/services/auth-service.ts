import LOCAL_STORAGE_CONSTANTS from "@/lib/constants/local-storage-constants";
import type {
  AuthTokenPayload,
  User,
  UserRole,
  UserScope,
} from "@/models/user-type";
import { jwtDecode } from "jwt-decode";

/**
 * Gets the current user's information from the local storage token.
 *
 * If the token is not found in local storage, the function returns null.
 * @returns The user's information or null if the token is not found.
 */
export const getCurrentUser = (): User | null => {
  const token = localStorage.getItem(LOCAL_STORAGE_CONSTANTS.TOKEN);
  if (!token) return null;
  const decodedToken = jwtDecode<AuthTokenPayload>(token);

  return {
    id: decodedToken.id,
    name: decodedToken.name,
    email: decodedToken.email,
    roles: decodedToken.roles,
    scopes: decodedToken.scopes,
  };
};

/**
 * Determines if the current user has the required roles and scopes.
 *
 * This function checks if the current user, obtained from the local storage token,
 * possesses at least one of the specified roles and one of the specified scopes.
 * If no roles or scopes are provided, the function defaults to true for those checks.
 *
 * @param roles - An optional array of roles to check against the current user's roles.
 * @param scopes - An optional array of scopes to check against the current user's scopes.
 * @returns `true` if the user has at least one of the specified roles and scopes, or if no roles or scopes are specified; otherwise, `false`.
 */

export const hasPermission = ({
  scopes,
  roles,
}: {
  roles?: UserRole[];
  scopes?: UserScope[];
}): boolean => {
  const user = getCurrentUser();
  if (!user) return false;

  // Check scopes if scopes filter is provided
  const scopeMatch =
    !scopes || scopes.length === 0
      ? true
      : scopes.some((scope) => user.scopes?.includes(scope));

  // Check roles if roles filter is provided
  const roleMatch =
    !roles || roles.length === 0
      ? true
      : roles.some((role) => user.roles?.includes(role));

  // Both must be true
  return scopeMatch && roleMatch;
};
