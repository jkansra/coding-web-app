import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding App",
  description: "Leetcode-like web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " bg-black text-white overflow-y-hidden p-2"
        }
      >
        {children}
      </body>
    </html>
  );
}
