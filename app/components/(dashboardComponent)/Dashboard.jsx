"use client";

import TotalMessage from "@/app/components/(dashboardComponent)/TotalMessage";
import TodayMessage from "@/app/components/(dashboardComponent)/TodayMessage";
import Unread from "@/app/components/(dashboardComponent)/Unread";
import WeekMessage from "@/app/components/(dashboardComponent)/WeekMessage";
import LinkPart from "@/app/components/(dashboardComponent)/LinkPart";
import Messages from "@/app/components/(dashboardComponent)/Messages";
import { fetchMessagesByUser } from "@/lib/FetchMessageByUser";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { isToday, isThisWeek } from "@/lib/DateCountLogic"; // ✅ use named exports

const Dashboard = () => {
  const { data: session } = useSession();
  const userID = session?.user.id;
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    if (!userID) return;
    const { success, messages } = await fetchMessagesByUser(userID);
    if (success) {
      setMessages(messages);
      toast.success("Messages loaded successfully");
    } else {
      toast.error("Failed to load messages");
    }
  };

  useEffect(() => {
    loadMessages();
  }, [userID]);

  

  // ✅ Avoid variable name conflicts with component names
  const todayMessages = messages.filter((msg) => isToday(msg.createdAt));
  const weekMessages = messages.filter((msg) => isThisWeek(msg.createdAt));
  const unreadMessages = messages.filter((msg) => msg.isNew);
  
  return (
    <>
      <aside
        className="
          flex
          flex-col
          items-center
          mb-5
        "
      >
        <div
          className="
            w-full
            max-w-[800px]
            mt-5
            py-6
            px-18
            grid
            grid-cols-2
            gap-5
            place-items-center
          "
        >
          <TotalMessage messages={messages} loadMessages={loadMessages} />
          <TodayMessage TodayMessage={todayMessages} />
          <Unread Unread={unreadMessages} />
          <WeekMessage WeekMessage={weekMessages} />
        </div>

        <LinkPart />
      </aside>

      <div
        className="
          w-9/10
          max-w-[800px]
          bg-white
          rounded-lg
          shadow-gray-300
          shadow-lg
          mt-5
          mb-10
          px-2
          py-4
          pb-10
          sm:max-h-[700px]
          sm:overflow-y-scroll
        "
      >
        <h1
          className="
            font-poppins
            text-2xl
            font-semibold
            text-gray-800
            m-2
          "
        >
          Messages
        </h1>

        <hr
          className="
            w-full
            h-0.5
            bg-gray-200
            border-0
          "
        />

        <Messages
          messages={messages}
          setMessages={setMessages}
          loadMessages={loadMessages}
        />
      </div>
    </>
  );
};

export default Dashboard;
