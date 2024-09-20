import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faBriefcase, faMessage, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import photo from "./public/photoRM.jpeg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Romain Martineau",
  description: "Created by Romain Martineau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-screen">
          <div className="flex justify-center items-center h-screen">
            <div className="relative w-4/6 h-5/6 bg-gray-100 rounded-3xl shadow-lg p-0 flex">

              {/* LeftBar */}
              <div className="w-1/12 h-full bg-white bg-opacity-70 rounded-l-3xl p-4 flex flex-col space-y-4">
                <div className="flex space-x-2 p-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <nav className="flex flex-col space-y-16 items-center">
                  <Link href="/" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faMessage} className="mb-2 w-8" />
                    Chat
                  </Link>
                  <Link href="/resume" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faUser} className="mb-2 w-8" />
                    Resume
                  </Link>
                  <Link href="/work" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="mb-2 w-8" />
                    Work
                  </Link>
                  <Link href="/call" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faPhone} className="mb-2 w-8" />
                    Call
                  </Link>
                </nav>
              </div>
              {/* Main Content */}
              <div className="w-11/12 flex flex-col h-full">
                {/* Dynamic Content Here */}
                <div className="flex-grow text-black">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
