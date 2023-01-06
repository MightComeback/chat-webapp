"use client";

import { Message } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { clientPusher } from "../../pusher";
import MessageComponent from "./MessageComponent";

const ChatComponent = ({ messages }: { messages: Message[] }) => {
  const { data: session } = useSession();
  var messageArray: Message[] = messages;

  useEffect(() => {
    console.log("it does");
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages.find((message) => message.id === data.id)) return;
      messageArray.push(data);
      console.log(messageArray);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messageArray, clientPusher, messages]);

  return (
    <div className="center overflow-auto w-full py-16 flex flex-col-reverse">
      {messageArray
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
