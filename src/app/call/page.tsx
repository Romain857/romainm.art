
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as images from "../../utils/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const contactsItems = [
  {
    letter: "G",
    class: "text-black text-2xl",
    icon: faGithub,
    link: "https://github.com/Romain857",
    name: "Github"
  },
  {
    letter: "L",
    class: "text-blue-600 text-2xl",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/romain-martineau-8570/",
    name: "LinkedIn"
  },
  {
    letter: "M",
    class: "text-gray-700 text-2xl",
    icon: faEnvelope,
    link: "mailto:romainmart.85@gmail.com",
    name: "Mail"
  }
]
export default function CallPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filterItems = contactsItems.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div className="flex flex-col h-full p-6 mx-1">
      <h1 className="text-3xl font-semibold mb-4">Contacts</h1>
      <div className="relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <input
          placeholder="Search"
          className="pl-10 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full p-1 bg-gray-200"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="flex flex-row ">
        <Link href="/resume">
          <Image src={images.photo} alt="Photo" width={70} className="rounded-full" />
        </Link>
        <div className="flex flex-col justify-center pl-4">
          <h1 className="text-2xl font-semibold">Romain Martineau</h1>
          <span className="text-gray-500">My card</span>
        </div>
      </div>

      {filterItems.map((contact, index) => (
        <div className="mt-7" key={index}>
          <span className="font-semibold text-gray-600">{contact.letter}</span>
          <hr className="my-2 border-gray-300" />
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={contact.icon}
              className={contact.class}
            />
            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="pl-4 hover:underline">
              {contact.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
