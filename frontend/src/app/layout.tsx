import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// ⬇️ Mueve metadata fuera del componente
export const metadata = {
  title: "Paisabank",
  description: "Tu banco digital de confianza",
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black`}>{children}</body>
    </html>
  );
}
