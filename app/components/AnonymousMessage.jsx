"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { MessageValidationZod } from "@/lib/MessageValidationZod";
import axios from "axios";
import LoaderComponent from "@/app/components/LoaderComponent";

const AnonymousMessage = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { username } = useParams();

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const result = MessageValidationZod.safeParse({ message });

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/messages/" + username, { message });
      toast.success(res.data.message);
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoaderComponent state={"Sending message"} />;

  return (
    <div
      className="
        w-full
        h-full
        mx-auto
        flex
        flex-col
        items-center
        justify-center
        gap-10
        pt-6
        bg-gray-50
        sm:pt-5
      "
    >
      {/* Header */}
      <div
        className="
          w-4/5
          sm:w-[500px]
          flex
          flex-col
          items-center
          justify-center
          gap-2
          text-center
        "
      >
        <span
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-full
            flex
            items-center
            justify-center
            bg-blue-500
            m-4
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="
              w-10
              h-10
              sm:size-15
              text-white
            "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </span>

        <h1
          className="
            font-poppins
            text-2xl
            font-bold
            text-gray-800
          "
        >
          Send an anonymous message
        </h1>

        <h3
          className="
            font-semibold
            text-gray-600
            text-lg
          "
        >
          to @{username}
        </h3>
      </div>

      <div
        className="
          w-4/5
          sm:w-[500px]
          bg-white
          shadow-md
          shadow-gray-300
          rounded-md
          p-4
          mb-10
        "
      >
        <form
          onSubmit={handleMessageSubmit}
          className="
            flex
            flex-col
            gap-4
            w-full
            h-full
          "
        >
          <label
            className="
              text-gray-800
              font-semibold
            "
          >
            Your message
          </label>

          <textarea
            rows="6"
            maxLength="500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your anonymous message here..."
            required
            className="
              resize-none
              w-full
              px-4
              py-3
              rounded-md
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              text-gray-800
              text-md
            "
          />

          <span
            className="
              text-gray-600
              text-sm
              font-semibold
              self-end
            "
          >
            {message.length}/500
          </span>

          <button
            type="submit"
            className="
              w-full
              bg-blue-500
              font-semibold
              text-white
              text-lg
              rounded-md
              flex
              items-center
              justify-center
              gap-2
              p-3
              mt-2
              hover:bg-blue-600
              transition-colors
              duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            Send anonymous message
          </button>
        </form>

        <Link
          href="/signup"
          className="
            block
            text-center
            text-lg
            font-poppins
            font-semibold
            text-blue-600
            mt-6
          "
        >
          Create your own anonymous link
        </Link>
      </div>
    </div>
  );
};

export default AnonymousMessage;
