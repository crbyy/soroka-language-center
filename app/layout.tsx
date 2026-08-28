import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});


export const metadata: Metadata = {
  title: "Языковой центр Сорока в Чите",
  description: "Языковой центр «Сорока» (Soroka) в Чите — английский, немецкий и китайский языки для детей и взрослых.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
