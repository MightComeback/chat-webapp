"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const LogOutButton = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.image && (
        <div className="flex p-2 items-center gap-4">
          <button
            className="text-white font-bold uppercase p-2 px-6 text-xs bg-white/10 shadow-xl rounded-xl"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default LogOutButton;
