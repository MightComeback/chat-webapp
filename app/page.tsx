import ChatComponent from "./components/ChatComponent";
import MessageInput from "./components/MessageInput";

const Page = () => {
  return (
    <div className="w-full rounded-xl shadow-md flex flex-col">
      <ChatComponent />
      <MessageInput />
    </div>
  );
};

export default Page;
