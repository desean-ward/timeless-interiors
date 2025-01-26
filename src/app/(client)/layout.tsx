import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "@/components/header/header.component";
// import FooterComponent from "@/components/footer/footer.component";
// import BlogFooterComponent from "@/components/blog-footer/blog-footer.component";
import FooterWrapper from "@/components/footer-wrapper/footer-wrapper.component";
import TransitionEffect from "@/components/transition-effect/transition-effect.component";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const emotional = localFont({
  src: "../../app/fonts/emotional-rescue.ttf",
  variable: "--emotional-rescue",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Timeless Interiors",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  layoutContext?: { isBlog?: boolean };
}>) {

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${emotional.variable} antialiased`}
      >
        <TransitionEffect />
        <HeaderComponent />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
