import { BREAK_POINTS } from "@/constants";

export const getScreenWidth = () => {
  const screenWidth = window.innerWidth;
  const breakPointArr = Object.values(BREAK_POINTS);
  const breakPointKeys = Object.keys(BREAK_POINTS);
  const valueIndex = breakPointArr.indexOf(
    breakPointArr.filter((value) => value >= screenWidth)[0]
  );
  const breakPointType = breakPointKeys[valueIndex];

  return {
    width: screenWidth,
    type: breakPointType,
  };
};

const TOKEN_KEY = "authToken";

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
