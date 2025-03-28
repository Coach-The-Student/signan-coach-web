import { sendMessage } from "@/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc";
import { useEffect, useState } from "react";

interface Props {
  name: string;
  profilePicture: string;
  onlineStatus: boolean;
  senderId: string;
  receiverId: string;
  chatHistory: MessageProps[];
  setChatHistory: React.Dispatch<React.SetStateAction<MessageProps[]>>;
  socket: any;
}

const ChatBox = ({
  name,
  profilePicture,
  onlineStatus,
  senderId,
  receiverId,
  chatHistory,
  setChatHistory,
  socket,
}: Props) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const messageData = {
      senderId,
      receiverId,
      content: newMessage,
    };

    try {
      const sentMessage = await sendMessage(messageData);

      if (sentMessage) {
        setChatHistory((prev) => [
          ...prev,
          {
            message: sentMessage.message || "",
            isMe: true,
            showName: true,
            photoUrl: profilePicture,
            senderName: "You",
            senderId,
            receiverId,
            timestamp: new Date().toISOString(),
          },
        ]);
      }

      socket.emit("sendMessage", sentMessage);

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    socket.on("receiveMessage", (message: MessageProps) => {
      if (
        (message.senderId === receiverId && message.receiverId === senderId) ||
        (message.senderId === senderId && message.receiverId === receiverId)
      ) {
        setChatHistory((prev) => [...prev, message]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [receiverId, senderId, socket, setChatHistory]);

  return (
    <div className="h-full flex flex-col justify-between pr-10 pl-6">
      <div className="flex items-center space-x-2 -mt-6">
        <div className="relative">
          <img
            src={profilePicture}
            alt={name}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">{name}</h3>
          {onlineStatus && <p className="text-gray-600 text-xs">Online</p>}
        </div>
      </div>

      <div className="h-full flex flex-col gap-2 mt-5 overflow-y-auto">
        {chatHistory.length > 0 ? (
          chatHistory.map((message, index) => (
            <Message
              key={index}
              {...message}
              isMe={message.senderId === senderId}
              showName={
                index === 0 || !chatHistory[index - 1]
                  ? true
                  : chatHistory[index - 1].senderId !== message.senderId
              }
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No messages yet</p>
          </div>
        )}
      </div>

      <div>
        <div className="h-12 rounded-md bg-gray-100 flex items-center">
          <input
            placeholder="Type your message"
            className="flex w-full border-none outline-none text-sm bg-transparent px-4 placeholder:text-grey-text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
        </div>
      </div>
    </div>
  );
};

export type MessageProps = {
  message: string;
  isMe: boolean;
  showName: boolean;
  photoUrl: string;
  senderName: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
};

const Message = ({
  message,
  isMe,
  showName,
  photoUrl,
  senderName,
}: MessageProps) => {
  return (
    <div className="flex flex-col gap-1">
      {showName && (
        <div
          className={`${
            isMe ? "justify-end flex-row-reverse ml-auto" : "justify-start"
          } flex gap-2 items-center`}
        >
          <Avatar className="w-6 h-6">
            <AvatarImage src={photoUrl} alt={senderName} />
            <AvatarFallback>{senderName[0]}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium">{senderName}</span>
        </div>
      )}
      <div className={`${isMe ? "justify-end" : "justify-start"} flex w-full`}>
        <p
          className={`${
            isMe ? "bg-primary text-white text-right" : "bg-primary-20"
          } text-sm max-w-[80%] rounded-lg p-3`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
