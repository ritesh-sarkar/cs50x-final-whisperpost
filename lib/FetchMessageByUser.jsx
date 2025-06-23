import axios from "axios";

export const fetchMessagesByUser = async (userID) => {
  try {
    const response = await axios.post("/api/messages", { userID });

    const formattedMessages = response.data.map((msg) => ({
      ...msg,
      id: msg._id,
    }));

    return { success: true, messages: formattedMessages };
  } catch (error) {
    return { success: false, error };
  }
};
