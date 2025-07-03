"use client";
import { useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";

const Messages = ({ messages, setMessages, loadMessages }) => {
  const [deleting, setDeleting] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const { data: session } = useSession();

  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const time = new Date(createdAt);
    const diff = Math.floor((now - time) / 1000); // in seconds

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const toggleIsNew = async (messageID) => {
    try {
      await axios.patch("/api/messages", {
        messageID,
        action: "toggle-new",
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageID ? { ...msg, isNew: false } : msg
        )
      );
      loadMessages();
    } catch {
      toast.error("Failed to mark as read");
    }
  };

  const toggleLoved = async (messageID) => {
    try {
      await axios.patch("/api/messages", {
        messageID,
        action: "toggle-love",
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageID ? { ...msg, loved: !msg.loved } : msg
        )
      );
      loadMessages();
    } catch {
      toast.error("Failed to love this message");
    }
  };

  const messageDelete = async (messageID) => {
    try {
      setDeleting(messageID);

      await axios.delete("/api/messages", {
        data: { messageID },
      });

      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== messageID));
        setDeleting(null);
      }, 1200);

      toast.success("Message deleted successfully");
      loadMessages();
    } catch {
      toast.error("Failed to delete message");
      setDeleting(null);
    }
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="relative">
      {messages.map((msg) => {
        const isBeingDeleted = deleting === msg.id;

        return (
          <div
            key={msg.id}
            onClick={() => {
              toggleIsNew(msg.id);
              setSelectedMessage(msg);
            }}
            className={clsx(
              `
              w-full
              bg-white
              rounded-lg
              shadow-gray-300
              shadow-md
              mt-5
              px-2
              py-4
              transition
              duration-300
              ease-in-out
              relative
              cursor-pointer
              `,
              msg.isNew && "newMessage",
              isBeingDeleted &&
                "opacity-0 blur-2xl scale-95 transition duration-1000 ease-in-out"
            )}
          >
            <div
              className="
              w-full
              px-1
              py-2
              mt-3
              flex
              items-center
            "
            >
              <div
                className={clsx(
                  `
                  w-2.5
                  h-2.5
                  bg-blue-600
                  rounded-full
                  m-1
                  `,
                  !msg.isNew && "hidden"
                )}
              />
              <h3>Anonymous ● {getTimeAgo(msg.createdAt)}</h3>

              <span
                className="
                flex
                ml-auto
                gap-4
                items-center
                text-gray-600
                text-sm
                mx-2
              "
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLoved(msg.id);
                  }}
                  className={clsx(
                    `
                    w-8
                    h-8
                    rounded-md
                    flex
                    justify-center
                    items-center
                  `,
                    msg.loved && "loved"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    messageDelete(msg.id);
                  }}
                  className="
                    w-8
                    h-8
                    rounded-md
                    flex
                    justify-center
                    items-center
                    transition-all
                    duration-300
                    ease-in-out
                    active:scale-90
                    hover:bg-gray-400
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <p>{msg.message}</p>
          </div>
        );
      })}


      {selectedMessage && (
        <div
          className="
            fixed 
            inset-0 
            bg-black/40 
            backdrop-blur-sm 
            z-50 
            flex 
            items-center 
            justify-center
          "
          onClick={closeModal}
        >
          <div
            className="
              bg-white 
              rounded-lg 
              shadow-lg 
              p-6 
              max-w-md 
              w-[90%] 
              relative
              text-gray-800
              font-poppins
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="
                absolute 
                top-2 
                right-2 
                text-gray-500 
                hover:text-gray-700
                transition-all 
                duration-300
                ease-in-out
              "
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="
                size-6
                active:scale-90
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="font-bold text-lg mb-3">Anonymous</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedMessage.message}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {getTimeAgo(selectedMessage.createdAt)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
