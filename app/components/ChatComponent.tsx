import { Message } from "@prisma/client";
import { unstable_getServerSession } from "next-auth";
import { getMessages, getUserById } from "../../lib/messages";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import MessageComponent from "./MessageComponent";

const ChatComponent = async () => {
  const { messages } = await getMessages();
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className="py-16 px-4 overflow-auto flex flex-col-reverse">
      {messages
        ?.slice(0)
        .reverse()
        .map((message) => (
          <div key={message.id}>
            <MessageComponent
              message={message}
              sentByUser={
                session?.user?.name === message.userName ? true : false
              }
            />
          </div>
        ))}
    </div>
  );
};

export default ChatComponent;
