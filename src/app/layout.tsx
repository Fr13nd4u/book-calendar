import type { Metadata } from "next";
import { Poppins, Kaisei_Tokumin } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600"]
});

const kaiseiTokumin = Kaisei_Tokumin({
    variable: "--font-kaisei-tokumin",
    subsets: ["latin"],
    weight: "700"
});

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Choose a date and time that is convenient for you to e-meet your stylist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kaiseiTokumin.variable} ${poppins.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
