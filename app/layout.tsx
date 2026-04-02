import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 Questions To Your Soul",
  description: "Amar Bennett · New York · No Correct Answers. Only Honest Ones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
