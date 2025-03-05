import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ToastProps {
  primaryMessage: string;
  secondaryMessage?: string;
  type: "success" | "error" | "info" | "warning";
}

const Toast: React.FC<ToastProps> = ({
  primaryMessage,
  secondaryMessage,
  type,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const getToastClasses = () => {
    const baseClasses =
      "fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg shadow-lg text-white flex items-center gap-4 max-w-xs max-sm:w-[70%] md:max-w-md lg:max-w-lg animate-slide-in";

    switch (type) {
      case "success":
        return `${baseClasses} bg-green-600`;
      case "error":
        return `${baseClasses} bg-red-600`;
      case "info":
        return `${baseClasses} bg-blue-600`;
      case "warning":
        return `${baseClasses} bg-yellow-600`;
      default:
        return `${baseClasses} bg-blue-600`;
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "info":
        return "ℹ️";
      case "warning":
        return "⚠️";
      default:
        return "ℹ️";
    }
  };

  return ReactDOM.createPortal(
    <div className={getToastClasses()}>
      <span className="text-2xl max-sm:text-lg">{getIcon()}</span>
      <div className="flex flex-col">
        <span className="font-semibold text-lg max-sm:text-sm">
          {primaryMessage}
        </span>
        {secondaryMessage && (
          <span className="text-sm max-sm:text-xs">{secondaryMessage}</span>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Toast;
