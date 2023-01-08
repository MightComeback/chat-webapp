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
  const [newMessage, setNewMessage] = useState(false);

  let messageArray: Message[] = messages;
  const [allMessages, setAllMessages] = useState<Message[]>(messageArray);

  const scrollToMessageListBottom = () => {
    setNewMessage(false);
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages.find((message) => message.id === data.id)) return;
      messageArray.push(data);
      setAllMessages(messageArray);
      router.push("/");
      setNewMessage(true);
    });
  }, [messageArray, messages, clientPusher, allMessages]);

  useEffect(() => {
    if (document.body.scrollHeight - document.body.scrollTop !== 0)
      setNewMessage(true);
  }, []);

  return (
    <div className="center overflow-auto w-full py-16 flex flex-col-reverse">
      <div
        className={`fixed bottom-20 max-w-[8rem] border right-1/2 text-white p-1 rounded-md animate-bounce
        ${newMessage ? "flex" : "hidden"}`}
      >
        <button onClick={() => scrollToMessageListBottom()}>
          <img
            className="w-6 h-6 text-white"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
            alt="scroll image"
          />
        </button>
      </div>
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
