import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import getForecast from "@/utils/getForecast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather app",
  description: "Weather app created with Nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getForecast("Novi Sad");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {res && <Header res={res} />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
