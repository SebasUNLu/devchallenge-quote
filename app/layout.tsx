import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QuoteContextProvider from "./utils/context/QuoteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Quote generator from Quote Garden API, by Sebastián Marchetti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuoteContextProvider>{children}</QuoteContextProvider>
      </body>
    </html>
  );
}
