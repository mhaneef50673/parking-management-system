import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" suppressHydrationWarning>
      <Script
        id="app-theme"
        dangerouslySetInnerHTML={{
          __html: `const localTheme = window.localStorage.getItem("theme")
   
              if (localTheme === "dark") {
                document.documentElement.classList.add("dark")
              }
  
              if (localTheme === "light" && (document.documentElement.dataset &&
                !document.documentElement.dataset.forceDarkmode)) {
                  document.documentElement.classList.remove("dark")
              }
              `,
        }}
        strategy="beforeInteractive"
      ></Script>

      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageLayout>{children}</PageLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
