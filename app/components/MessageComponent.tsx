import Image from "next/image";
import { Message } from "@prisma/client";

export default function MessageComponent({
  message,
  sentByUser,
}: {
  message: Message;
  sentByUser: boolean;
}) {
  const newDate = new Date(message.createdAt!);

  return (
    <div
      className={`p-2 shadow-md max-w-sm rounded-xl border text-sm m-2 text-left ${
        sentByUser
          ? "border-green-300 float-right"
          : "border-red-300 float-left"
      }`}
    >
      <div className="flex justify-between m-1">
        <div className="flex gap-2 items-center">
          <Image
            src={message.profileImg}
            alt={message.userName}
            width={25}
            height={25}
            className={`rounded-full ${sentByUser && "order-3"}`}
          />
          <p
            className={`text-xs font-light flex-1 overflow-hidden whitespace-nowrap text-ellipsis ${
              sentByUser && "order-2"
            }`}
          >
            {message.userName}
          </p>
          <p
            className={`text-xs font-extralight p-2 ${sentByUser && "order-1"}`}
          >
            {newDate.toLocaleTimeString() +
              " | " +
              newDate.toLocaleDateString()}
          </p>
        </div>
      </div>
      <p className="font-sans">{message.body.replaceAll('"', " ")}</p>
    </div>
  );
}
