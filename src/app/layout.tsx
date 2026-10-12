import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "@/shared/styles/globals.css";

import { ReactNode } from "react";
import { METADATA } from "@/constants/Metadata";
import ProviderContainer from "@/context";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

interface PropType {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<PropType>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body style={{ overflow: "hidden", padding: 0, margin: 0 }}>
        <ProviderContainer>{children}</ProviderContainer>
      </body>
    </html>
  );
}
