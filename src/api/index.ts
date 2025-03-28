import { getToken, setToken as saveToken } from "@/helpers";
import { MessageProps } from "@/pages/dashboard/chat/components/ChatBox";
import axios from "axios";
import { Login, Register, Verify } from "./types";

let token: string | null = getToken();

const apiClient = axios.create({
  baseURL: "https://signan-core-backend-services.onrender.com",
  // baseURL: "http://192.168.0.14:8087",
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

export const fetchInbox = async (): Promise<string[]> => {
  try {
    const response = await apiClient.get("/message/interacted-users");
    return response.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
};

export const fetchUsers = async (): Promise<
  { id: string; name: string; profilePicture: string }[]
> => {
  try {
    const response = await apiClient.get("/message/all-users");
    return response.data.data.map((user: any) => ({
      id: user._id,
      name: `${user.first_name} ${user.last_name}`,
      profilePicture: user.profilePicture || "https://via.placeholder.com/150",
      onlineStatus: false,
      unreadMessages: 0,
    }));
  } catch (error) {
    handleApiError(error);
    return [];
  }
};
export const fetchChatHistory = async (
  senderId: string,
  receiverId: string
): Promise<MessageProps[]> => {
  try {
    const response = await apiClient.get(
      `/message/history/${senderId}/${receiverId}`
    );

    return response.data.data.map((message: any) => ({
      message: message.content,
      isMe: message.senderId === senderId,
      showName: false,
      photoUrl:
        message.senderId.profilePicture || "https://via.placeholder.com/150",
      senderName: `${message.senderId.first_name} ${message.senderId.last_name}`,
      senderId: message.senderId,
      receiverId: message.receiverId || "",
      timestamp: message.timestamp,
    }));
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return [];
  }
};

export const sendMessage = async (messageData: {
  senderId: string;
  receiverId: string;
  content: string;
}): Promise<MessageProps | undefined> => {
  try {
    const response = await apiClient.post("/message/send", messageData);
    return response.data.data;
  } catch (error) {
    handleApiError(error);
    return undefined;
  }
};
