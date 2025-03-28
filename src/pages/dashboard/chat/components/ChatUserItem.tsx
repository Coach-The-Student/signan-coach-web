import { Avatar, AvatarFallback, AvatarImage } from "@/components/inc";

interface Props {
  name: string;
  profilePicture: string;
  unreadMessages?: number; // Optional if not always available
  onlineStatus?: boolean; // Optional if not always available
  message?: string; // Add the message prop
}

function ChatUserItem({
  name,
  profilePicture,
  unreadMessages = 0, // Default to 0 if not provided
  onlineStatus = false, // Default to false if not provided
  message = "", // Default to an empty string if not provided
}: Props) {
  return (
    <div className="flex items-start justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Avatar>
            <AvatarImage src={profilePicture} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          {onlineStatus && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">{name}</h3>
          <p className="text-gray-600 text-xs">{message}</p>{" "}
          {/* Display the message */}
        </div>
      </div>
      {unreadMessages > 0 && (
        <span className="min-w-4 h-4 text-xs text-white bg-primary rounded-full text-center align-middle mt-2">
          {unreadMessages}
        </span>
      )}
    </div>
  );
}

export default ChatUserItem;
