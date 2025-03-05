import { getToken, setToken as saveToken } from "@/helpers";
import axios from "axios";
import { Login, Register, Verify } from "./types";

let token: string | null = getToken();

const apiClient = axios.create({
  baseURL: "https://signan-core-backend-services.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error: any) => {
  console.error("API Error:", error);
  throw error;
};

export const setToken = (newToken: string) => {
  token = newToken;
  saveToken(newToken);
};

apiClient.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function registerCoach(data: Register) {
  try {
    const response = await apiClient.post("/auth/register-coach", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function verifyCoach(data: Verify) {
  try {
    const response = await apiClient.post("/auth/verify-user", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function login(data: Login) {
  try {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function profile() {
  try {
    const response = await apiClient.get("/profile");
    return response.data.coach;
  } catch (error) {
    handleApiError(error);
  }
}
