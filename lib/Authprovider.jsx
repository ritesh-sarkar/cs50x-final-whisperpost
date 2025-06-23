"use client";
import { SessionProvider } from "next-auth/react";

export function Authprovider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
