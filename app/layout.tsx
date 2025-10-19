import type { Metadata } from "next";
import { Cherry_Cream_Soda, Pacifico, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cherryCreamSoda = Cherry_Cream_Soda({
  variable: "--font-cherry-cream-soda",
  subsets: ["latin"],
  weight: ["400"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Houston Taylor | Portfolio",
  description: "UI/UX Designer & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cherryCreamSoda.variable} ${pacifico.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
