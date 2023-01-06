import Link from "next/link";
import "../../styles/globals.css";

import Provider from "../Provider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <span className="uppercase font-medium">Home</span>
          </Link>
          <div className="relative mt-12 sm:mt-16">
            <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
              Sign in to your account
            </h1>
          </div>
          <div className="flex-auto bg-white px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
            {children}
          </div>
        </div>
      </main>
    </Provider>
  );
}
