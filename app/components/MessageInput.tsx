"use client";

import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";

const MessageInput = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");

  const reloadInput = () => {
    setInput("");
    window.location.reload();
  };

  const uploadMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !session) return;

    const setMsg = input;

    const response = await fetch("/api/addMessage", {
      method: "POST",
      body: JSON.stringify(setMsg),
    });

    reloadInput();
    return await response.json();
  };

  return (
    <>
      <form
        onSubmit={(e) => uploadMessage(e)}
        className="bg-white w-full flex space-x-2 border-t border-gray-100 p-2 fixed bottom-0"
      >
        <input
          type="text"
          value={input}
          disabled={!session}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message"
          className="flex-1
        border border-gray-300 rounded-lg
        focus:border-transparent px-5
        py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!input}
          className="disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-black border-2 border-black font-bold uppercase p-2 sm:px-6 text-xs bg-white shadow-md rounded-xl"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default MessageInput;
