import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Jess Jiang",
  description: "Jess Jiang's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
