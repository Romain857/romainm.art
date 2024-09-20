import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faBriefcase, faMessage, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import photo from "./public/photoRM.jpeg";

export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#ededfc] bg-opacity-100 rounded-tr-3xl p-7">
        <div className="flex items-center">
          <Image
            src={photo}
            alt="Photo"
            width={60}
            height={50}
            className="rounded-full"
          />
          <div className="ml-8">
            <span className="text-lg text-black font-semibold">Romain Martineau</span>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 mr-12 text-gray-600">
          <Link href="/call" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faPhone} className="mb-2 w-6" />
          </Link>
          <FontAwesomeIcon icon={faRotateRight} className="mb-2 w-6" />
        </div>
      </div>

      {/* Date under navbar */}
      <div className="flex justify-center mt-4">
        <span className="bg-white text-gray-800 p-2 rounded-full shadow-md border border-gray-300">{formattedDate}</span>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center">
        {/* Main content can go here */}
        
      </div>

      {/* Footer Input */}
      <div className="flex justify-center bg-gray-200 bg-opacity-100 rounded-br-3xl p-7">
        <input
          type="text"
          placeholder="Type a message"
          className="w-3/4 border border-gray-300 rounded-full pl-8 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:font-bold"
        />
      </div>
    </div>
  );
}