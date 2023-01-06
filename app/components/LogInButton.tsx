"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

const LogInButton = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.image ? (
        <div className="flex p-2 items-center gap-4">
          <Image
            src={session.user.image}
            alt={session.user.name!}
            className="inline-block rounded-full shadow-md border border-gray-300"
            width={40}
            height={40}
          />
          <p className="font-bold hidden sm:inline-block">
            {session.user.name}
          </p>
        </div>
      ) : (
        <button
          className="text-black border-2 border-black font-bold uppercase p-2 px-6 text-xs bg-white shadow-md rounded-xl"
          onClick={() => signIn()}
        >
          log in
        </button>
      )}
    </div>
  );
};

export default LogInButton;
