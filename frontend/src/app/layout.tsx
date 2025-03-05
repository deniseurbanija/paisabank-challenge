"use client";
import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={`${poppins.className} bg-black`}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
