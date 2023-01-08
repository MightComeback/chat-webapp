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
            className="inline-block rounded-full shadow-xl"
            width={40}
            height={40}
          />
          <p className="font-bold hidden sm:inline-block text-white">
            {session.user.name}
          </p>
        </div>
      ) : (
        <button
          className="text-white shadow-xl font-bold uppercase p-2 px-6 text-xs bg-white/10 rounded-xl"
          onClick={() => signIn()}
        >
          log in
        </button>
      )}
    </div>
  );
};

export default LogInButton;
