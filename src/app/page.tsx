import Image from "next/image";
import photo from "./public/photoRM.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faLink, faMessage, faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-screen">
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-4/6 h-4/6 bg-gray-100 rounded-3xl shadow-lg p-0 flex">
                    <div className="w-1/6 h-full bg-white bg-opacity-70 rounded-l-3xl p-4 flex flex-col space-y-4">
                        <div className="flex space-x-2 p-5">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <nav className="flex flex-col space-y-16 items-center">
                            <a href="#" className="text-gray-800 hover:text-gray-600 flex flex-col items-center">
                                <FontAwesomeIcon icon={faMessage} className="mb-2 w-8" />
                                Chats
                            </a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 flex flex-col items-center">
                                <FontAwesomeIcon icon={faUser} className="mb-2 w-8" />
                                CV
                            </a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 flex flex-col items-center">
                                <FontAwesomeIcon icon={faPhone} className="mb-2 w-8" />
                                Calls
                            </a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 flex flex-col items-center">
                                <FontAwesomeIcon icon={faLink} className="mb-2 w-10" />
                                Channels
                            </a>
                        </nav>
                    </div>
                    <div className="w-5/6 flex flex-col h-full">
                        <div className="flex items-center justify-between bg-[#ededfc] bg-opacity-100 rounded-tr-3xl p-7">
                            <div className="flex items-center">
                                <Image
                                    src={photo}
                                    alt="Photo"
                                    width={60}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <span className="text-lg font-semibold">Romain Martineau</span>
                                    <div className="flex items-center mt-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                        <span className="text-sm text-gray-600">Online</span>
                                    </div>
                                </div>
                            </div>
                            <span>
                                <FontAwesomeIcon icon={faRotateRight} className="mb-2 w-6" />
                            </span>
                        </div>
                        <div className="flex-grow p-6">
                            <p>cc</p>
                        </div>
                        <div className="flex justify-center bg-gray-200 bg-opacity-100 rounded-br-3xl p-7">
                            <input
                                type="text"
                                placeholder="Type a message"
                                className="w-3/4 border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
