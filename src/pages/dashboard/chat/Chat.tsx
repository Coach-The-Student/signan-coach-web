import { fetchChatHistory, fetchInbox, fetchUsers } from "@/api";
import { LineBox } from "@/components/inc";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Header } from "../components";
import { ChatBox, ChatUserItem } from "./components";
import { MessageProps } from "./components/ChatBox";

// const socket = io("http://192.168.0.14:8087");
const socket = io("https://signan-core-backend-services.onrender.com");
type ChatUser = {
  id: string;
  name: string;
  profilePicture: string;
  onlineStatus: boolean;
  unreadMessages: number;
};

function Chat() {
  const user = localStorage.getItem("user");
  const [inbox, setInbox] = useState<ChatUser[]>([]);
  const [selectedChat, setSelectedChat] = useState<ChatUser | null>(null);
  const [chatHistory, setChatHistory] = useState<MessageProps[]>([]);
  const [userId] = useState(user ? JSON.parse(user)._id : "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<ChatUser[]>([]);

  useEffect(() => {
    const loadInbox = async () => {
      try {
        const userIds = await fetchInbox();
        const users = userIds.map((user: any) => ({
          id: user._id,
          name: `${user.first_name} ${user.last_name}`,
          profilePicture:
            user.profilePicture || "https://via.placeholder.com/150",
          onlineStatus: user.onlineStatus || false,
          unreadMessages: user.unreadMessages || 0,
        }));
        setInbox(users);
      } catch (error) {
        console.error("Error fetching inbox:", error);
      }
    };

    loadInbox();
  }, []);

  useEffect(() => {
    if (!selectedChat) return;

    const loadChatHistory = async () => {
      try {
        const history = await fetchChatHistory(userId, selectedChat.id);
        setChatHistory(history || []);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    loadChatHistory();
  }, [selectedChat, userId]);

  const handleChatSelect = (chat: ChatUser) => {
    setSelectedChat(chat);
    setChatHistory([]);
  };

  const openModal = async () => {
    try {
      const users = await fetchUsers();
      setAllUsers(
        users.map((user: any) => ({
          id: user.id,
          name: user.name,
          profilePicture:
            user.profilePicture || "https://via.placeholder.com/150",
          onlineStatus: user.onlineStatus || false,
          unreadMessages: user.unreadMessages || 0,
        }))
      );
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  const handleUserSelect = (user: ChatUser) => {
    setSelectedChat(user);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <Header title="Chat" />
      <LineBox className="h-screen">
        <section className="h-full grid grid-cols-7 pt-24">
          <div className="col-span-5">
            {selectedChat ? (
              <ChatBox
                name={selectedChat.name}
                profilePicture={selectedChat.profilePicture}
                onlineStatus={selectedChat.onlineStatus}
                senderId={userId}
                receiverId={selectedChat.id}
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                socket={socket}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">
                  Select a chat to start messaging
                </p>
              </div>
            )}
          </div>
          <div className="col-span-2 h-full border border-gray-200 rounded-md overflow-y-auto">
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold">Messages</h3>
              <div className="border-2 outline-border-grey rounded-md py-1 px-3">
                <input
                  className="flex w-full border-none outline-none text-sm"
                  placeholder="Search messages"
                />
              </div>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={openModal}
              >
                Add New Chat
              </button>
            </div>
            {inbox.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleChatSelect(chat)}
                className={`cursor-pointer ${
                  selectedChat?.id === chat.id ? "bg-gray-100" : ""
                }`}
              >
                <ChatUserItem message={""} {...chat} />
              </div>
            ))}
          </div>
        </section>
      </LineBox>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h3 className="text-lg font-semibold mb-4">Select a User</h3>
            <div className="flex flex-col gap-2">
              {allUsers.map((user) => (
                <div
                  key={user.id}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                  onClick={() => handleUserSelect(user)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
