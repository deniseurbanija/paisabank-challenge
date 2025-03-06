import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PaisaBank",
  description:
    "Maneja tu vida financiera de manera fácil y segura con PaisaBank",
  keywords: [
    "banco digital",
    "finanzas personales",
    "PaisaBank",
    "banca en línea",
  ],
  authors: [{ name: "PaisaBank Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "paisabank-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
