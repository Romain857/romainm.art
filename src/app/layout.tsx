"use client";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faBriefcase, faMessage } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import * as allLogos from "../utils/images";
// import { metadata } from "./components/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);
  // const [fullScreen, setFullSreen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <html>
      <head>
        <title>Romain Martineau</title>
      </head>
      <body className="font-sans antialiased">
        {/* Navbar */}
        <header className="hidden md:block w-full bg-white bg-opacity-50 shadow-lg fixed">
          <nav className="flex items-center justify-between mx-4">
            <div className="flex space-x-2">
              <span className="mx-2 font-semibold text-gray-800 hover:text-gray-600">Made with</span>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <Image src={allLogos.NextLogo} alt="NextJS" width={18} height={18} className="inline-block mr-2" />
              </a>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <Image src={allLogos.ReactLogo} alt="React" width={20} height={20} className="inline-block mr-2" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <Image src={allLogos.TailwindCssLogo} alt="Tailwind CSS" width={20} height={20} className="inline-block mr-2" />
              </a>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-800 hover:text-gray-600 font-semibold text-bold">
              &copy; Portfolio - Romain Martineau
            </div>
            <div className="flex space-x-4 text-gray-800 hover:text-gray-600">
              {isMounted && (
                <span>
                  {currentDateTime.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}{" "}
                  {currentDateTime.toLocaleTimeString()}
                </span>
              )}
            </div>
          </nav>
        </header>

        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-screen">
          <div className="flex justify-center items-center h-screen">
            <div className="relative w-full md:w-4/6 h-full md:h-5/6 bg-gray-100 md:rounded-3xl shadow-lg p-0 flex">
              {/* LeftBar */}
              <div className="hidden md:flex w-1/12 h-full bg-white bg-opacity-70 rounded-l-3xl p-4 flex-col space-y-4">
                <div className="hidden xl:flex space-x-2 p-1 mb-9">
                  <div className="min-w-[13px] min-h-[13px] bg-red-500 rounded-full"></div>
                  <div className="min-w-[13px] min-h-[13px] bg-orange-500 rounded-full"></div>
                  <div className="min-w-[13px] min-h-[13px] bg-green-500 rounded-full"></div>
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
              <div className="w-full md:w-11/12 flex flex-col h-full">
                {/* Dynamic Content Here */}
                <div className="flex-grow text-black h-full">
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