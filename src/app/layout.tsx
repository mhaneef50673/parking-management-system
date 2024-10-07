import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Park Ease",
  description: "Parking Management System",
};

const PageLayout = dynamic(() => import("@/components/pageLayout"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
