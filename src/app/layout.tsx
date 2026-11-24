
import type { Metadata } from "next";
import "./globals.css";
import PawCursor from "../components/PawCursor";

export const metadata: Metadata = {
  title: "PupHaven | Find Your New Best Friend",
  description:
    "Find your perfect puppy companion with PupHaven. Discover adorable puppies and bring home your new best friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PawCursor />
        {children}
      </body>
    </html>
  );
}
