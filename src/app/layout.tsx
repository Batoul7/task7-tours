import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans as OpenSansFont } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import logoImg from '/public/assets/imgs/logo.png'
import Footer from "@/components/Footer/Footer";

const podcast = localFont({
  src: "./fonts/Podcast.ttf",
  variable: "--font-podcast",
  weight: "400",
});


const openSans = OpenSansFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700","800"],
  variable: "--font-open-sans",
});


export const metadata: Metadata = {
  title: "Tours to Tuscany",
}; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${podcast.variable} antialiased`}>
        <NavBar logo={logoImg.src}/>
        <main> {children}</main>
        <Footer/>
      </body>
    </html>
  );
}
