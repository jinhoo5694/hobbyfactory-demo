import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideButtons from "@/components/SideButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "하비팩토리 - 건담 프라모델 피규어 전문몰",
  description: "건담, 프라모델, 피규어의 강자 하비팩토리. 당신의 취미생활을 위한 모든 것",
  keywords: "건담, 프라모델, 피규어, 반다이, 굿스마일, 초합금, 하비팩토리",
  openGraph: {
    title: "하비팩토리 - 건담 프라모델 피규어 전문몰",
    description: "건담, 프라모델, 피규어의 강자 하비팩토리",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <SideButtons />
      </body>
    </html>
  );
}
