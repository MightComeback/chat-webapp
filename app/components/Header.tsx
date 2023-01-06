"use client";

import { useSession } from "next-auth/react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

const Header = () => {
  return (
    <div className="fixed w-screen top-0 bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between">
        <LogInButton />
        <LogOutButton />
      </div>
    </div>
  );
};

export default Header;
