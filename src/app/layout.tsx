import type { Metadata } from "next";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faBriefcase, faMessage } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import * as allLogos from "./utils/index"

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
      <body className="font-sans antialiased">
        {/* Navbar */}
        <header className="w-full pb-1 bg-white bg-opacity-60 shadow-lg fixed">
          <nav className="flex items-center justify-between px-2 mx-4">
            <div className="flex items-center space-x-2">
              <span className="mx-2">Made with</span>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <Image src={allLogos.NextLogo} alt="NextJS" width={20} height={20} className="inline-block mr-2" />
              </a>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <Image src={allLogos.ReactLogo} alt="React" width={20} height={20} className="inline-block mr-2" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <Image src={allLogos.TailwindCssLogo} alt="Tailwind CSS" width={20} height={20} className="inline-block mr-2" />
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-800 hover:text-gray-600 font-semibold text-base">
              Portfolio - Martineau Romain
            </div>
          </nav>
        </header>


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
                    <FontAwesomeIcon icon={faMessage} className="mb-2 w-8 h-7" />
                    Chat
                  </Link>
                  <Link href="/resume" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faUser} className="mb-2 w-8 h-7" />
                    Resume
                  </Link>
                  <Link href="/work" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="mb-2 w-8 h-7" />
                    Work
                  </Link>
                  <Link href="/call" className="text-gray-600 hover:text-gray-400 flex flex-col items-center">
                    <FontAwesomeIcon icon={faPhone} className="mb-2 w-8 h-7" />
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
