import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Megan Tan—Portfolio",
  description: "Creative designer and coder crafting interfaces, interactions, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}