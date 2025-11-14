import { jwtDecode } from "jwt-decode";

export const getDetails = (token) => jwtDecode(token);

export const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const { exp } = getDetails(token);
    if (typeof exp !== "number") {
      return true;
    }
    return Date.now() / 1000 > exp;
  } catch (e) {
    return true;
  }
};
