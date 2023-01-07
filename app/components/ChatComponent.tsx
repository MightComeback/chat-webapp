"use client";

import { useRouter } from "next/navigation";
import { Message } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { clientPusher } from "../../pusher";
import MessageComponent from "./MessageComponent";

const ChatComponent = ({ messages }: { messages: Message[] }) => {
  const { data: session } = useSession();
  const router = useRouter();
  let messageArray: Message[] = messages;
  const [allMessages, setAllMessages] = useState<Message[]>(messageArray);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages.find((message) => message.id === data.id)) return;
      messageArray.push(data);
      setAllMessages(messageArray);
      console.log(allMessages);
      router.push("/");
    });
  }, [messageArray, messages, clientPusher, allMessages]);

  return (
    <div className="center overflow-auto w-full py-16 flex flex-col-reverse">
      {allMessages
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
