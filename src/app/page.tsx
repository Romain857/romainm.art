"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faRotateRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import photo from "./public/photoRM.jpeg";
import * as allLogos from "./utils/index"
import BouncingDotsLoader from "./components/BouncingDotsLoader"


export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const height = 20;
  const width = 20;
  const [messages, setMessages] = useState<{ text: string; time: string; isBot: boolean }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsTyping(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      setMessages([
        {
          text: "Welcome! You can ask me about my 'resume', 'skills', 'experience', or 'contact details', and I'll be happy to provide more information.",
          time: time,
          isBot: true,
        },
      ]);
      setIsTyping(false);
    }, 2000);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages((prev) => [...prev, { text: newMessage, time: currentTime, isBot: false }]);
      setNewMessage("");
      simulateBotTyping(newMessage);
    }
  };

  const simulateBotTyping = (message: string) => {
    setIsTyping(true);
    setTimeout(() => {
      generateBotResponse(message);
    }, 1000);
  };

  const generateBotResponse = (message: string) => {
    let botResponse = "";
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("profile")) {
      botResponse = "Hello! I'm Romain Martineau and I'm currently in my 5th year of computer engineering at EPSI in Nantes. After 3 years' experience at Manitou Group in Ancenis, France, I'm looking for a new experience for the end of 2024.";
    } else if (lowerCaseMessage.includes("skill")) {
      botResponse = (
        <span>
          I have gained extensive experience in development technologies:
          <ul>
            <li>
              <Image src={allLogos.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
              <Image src={allLogos.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
              <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                <strong>HTML / CSS</strong>
              </a>
            </li>
            <li>
              <Image src={allLogos.SqlLogo} alt="SQL" width={width} height={height} className="inline-block mr-2" />
              <a href="https://sql.sh/" target="_blank" rel="noopener noreferrer">
                <strong>SQL</strong>
              </a>
            </li>
            <li>
              <Image src={allLogos.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
              <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <strong>JavaScript</strong>
              </a>
            </li>
            <li>
              <Image src={allLogos.VueLogo} alt="Nuxt.js" width={width} height={height} className="inline-block mr-2" />
              <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">
                <strong>Nuxt.js / Vue.js</strong>
              </a>
            </li>
            <li>
              <Image src={allLogos.PythonLogo} alt="Python" width={width} height={height} className="inline-block mr-2" />
              <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                <strong>Python</strong>
              </a>
            </li>
            <li>
              <Image src={allLogos.CSharpLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
              <a href="https://docs.microsoft.com/fr-fr/dotnet/core/introduction" target="_blank" rel="noopener noreferrer">
                <strong>.NET Core</strong>
              </a>
            </li>
            <li>
              <Image src={allLogos.NodeLogo} alt="Node.js" width={width} height={height} className="inline-block mr-2" />
              <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
                <strong>Node.js</strong>
              </a>
            </li>
          </ul>

        </span>
      );
    } else if (lowerCaseMessage.includes("resume")) {
      botResponse = (
        <span>
          During my 3 years at Manitou Group, I developed a ticket management application and managed the deployment via Azure DevOps as well as integrating an automated testing tool.
          <br />
          <div>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://nuxtjs.org/docs" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.NuxtLogo} alt="Nuxt.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.VueLogo} alt="Vue.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://docs.microsoft.com/fr-fr/dotnet/core/introduction" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.CSharpLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.PythonLogo} alt="Python" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://sql.sh/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.SqlLogo} alt="SQL" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.GitLogo} alt="Git" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://azure.microsoft.com/fr-fr/documentation/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.AzureLogo} alt="Azure" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://www.figma.com/resources/learn-design/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.FigmaLogo} alt="Figma" width={14} height={14} className="inline-block mr-2" />
            </a>
            <a href="https://miro.com/templates/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.MiroLogo} alt="Miro" width={width} height={height} className="inline-block mr-2" />
            </a>
          </div>

          <br />
          In 2021, I designed a mobile application to present the BDE-WIPS' association, manage its events and the timetable for the school's students.
          <br />
          <div>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.ReactLogo} alt="React" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.NodeLogo} alt="Node.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://azure.microsoft.com/fr-fr/documentation/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.AzureLogo} alt="Azure" width={width} height={height} className="inline-block mr-2" />
            </a>
          </div>
          <br />

          In 2020, I participated in the development on the company's new project, providing each customer with full administration of their company's network in 3D
          <br />
          <div>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://symfony.com/doc/current/index.html" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.SymfonyLogo} alt="Symfony" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.ThreeJs} alt="Three.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://docs.microsoft.com/fr-fr/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
              <Image src={allLogos.CSharpLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
            </a>
          </div>

        </span>
      );
    } else if (lowerCaseMessage.includes("contact")) {
      botResponse = (
        <span>
          You can find me on <a href="https://www.linkedin.com/in/romain-martineau-8570/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a> or by email at <a href="mailto:romainmart.85@gmail.com" className="text-blue-500 underline">romainmart.85@gmail.com</a>
        </span>
      );
    } else if (lowerCaseMessage.includes("future")) {
      botResponse = "i'm looking for a new international experience or a french company in the west of france willing to support me over the next few years and organise my mobility in the future"
    }
    else {
      botResponse = "I don't understand.";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, time: currentTime, isBot: true },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const reload = () => {
    setMessages([]);
    setIsTyping(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages([
        {
          text: "Welcome! You can ask me about my 'profile' whith a simple 'hello', 'skills', 'resume' with experiences, or 'contact', and I'll be happy to provide more information.",
          time: time,
          isBot: true,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#ededfc] bg-opacity-100 rounded-tr-3xl p-7">
        <div className="flex items-center">
          <Link href="/resume">
            <Image src={photo} alt="Photo" width={60} height={50} className="rounded-full" />
          </Link>
          <div className="ml-8">
            <span className="text-lg text-black font-semibold">Romain Martineau</span>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-sm text-gray-600">{isTyping ? "is typing ..." : "Online"}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 mr-12 text-gray-600">
          <Link href="/call" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faPhone} className="mb-2 w-8 h-5" />
          </Link>
          <FontAwesomeIcon
            icon={faRotateRight}
            className="mb-2 w-6 h-5 cursor-pointer"
            onClick={reload}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-end items-center p-4 space-y-4 overflow-y-auto h-[calc(80vh-200px)]">
        <div className="flex justify-center mt-1">
          <span className="bg-white text-gray-800 p-2 rounded-full shadow-md border border-gray-300">{formattedDate}</span>
        </div>
        <div className="flex flex-col w-full overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-md border border-gray-200 w-2/6 ${msg.isBot ? "bg-white self-start ml-4" : "bg-[#d7f8f4] self-end mr-4"}`}
            >
              <p className="text-gray-800">{msg.text}</p>
              <p className="text-sm text-gray-500 mt-2">{msg.time}</p>
            </div>
          ))}
          {isTyping && (
            <div className="self-start ml-4 p-4 rounded-lg shadow-md border bg-white border-gray-200"><BouncingDotsLoader /></div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Footer Input */}
      <div className="flex justify-center bg-gray-200 bg-opacity-100 rounded-br-3xl p-7">
        <input
          type="text"
          placeholder="Type a message"
          className="w-3/4 border border-gray-300 rounded-full pl-8 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-3 bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}