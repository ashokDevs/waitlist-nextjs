import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Faceless Video Generator",
  description: "Generate Viral Faceless Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
