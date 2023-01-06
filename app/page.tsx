import { getMessages } from "../lib/messages";
import ChatComponent from "./components/ChatComponent";
import MessageInput from "./components/MessageInput";

const Page = async () => {
  const { messages } = await getMessages();
  
  return (
    <div className="rounded-xl shadow-md flex flex-col">
      <ChatComponent messages={messages!} />
      <MessageInput />
    </div>
  );
};

export default Page;
