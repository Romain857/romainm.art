"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faRotateRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import * as images from "../utils/images"
import BouncingDotsLoader from "../components/BouncingDotsLoader"


export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const height = 20;
  const width = 20;
  const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪",
    "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🥵", "🥶", "🥴",
    "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁",
    "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥",
    "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😤",
    "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "🤡", "👹", "👺",
    "👻", "👽", "👾", "🤖", "💩","👋"]
  const [messages, setMessages] = useState<{ text: string | JSX.Element; time: string; isBot: boolean }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsTyping(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      setMessages([
        {
          text: (
            <>
              Welcome 👋 ! I&apos;m Romain <br /> <br />You can say <strong>hello</strong> to start conversation or ask me about my <strong>profile</strong>, <strong>resume</strong>, <strong>skills</strong>, <strong>futur</strong>, <strong>eduction</strong>, <strong>address</strong> or <strong>contact</strong> by sending keywords.
            </>
          ),
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

  const handleAddEmoji = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setNewMessage((prevMessage) => prevMessage + randomEmoji);
  };

  const simulateBotTyping = (message: string) => {
    setIsTyping(true);
    setTimeout(() => {
      generateBotResponse(message);
    }, 1000);
  };

  const generateBotResponse = (message: string) => {
  const botResponse: (string | JSX.Element)[] = [];
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("profile") || lowerCaseMessage.includes("👋")) {
      botResponse.push(
        <span>
          Hello 👋 ! My name is Romain Martineau and I&apos;m a Full Stack Developer. <br /> I&apos;m currently in my 5th year of computer engineering at EPSI in Nantes. After 3 years&apos; experience at Manitou Group in Ancenis, France, I&apos;m looking for a new experience for the end of 2024.
        </span>
        );
    } 
    if (lowerCaseMessage.includes("skill")) {
      botResponse.push(
        <span>
          I&apos;ve used many programming languages and tools during my career, but I&apos;ve mainly developed my skills as a developer on :
          <ul>
            <li>
              <Image src={images.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
              <Image src={images.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
              <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                <strong>HTML / CSS</strong>
              </a>
            </li>
            <li>
              <Image src={images.SqlLogo} alt="SQL" width={width} height={height} className="inline-block mr-2" />
              <a href="https://sql.sh/" target="_blank" rel="noopener noreferrer">
                <strong>SQL</strong>
              </a>
            </li>
            <li>
              <Image src={images.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
              <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <strong>JavaScript</strong>
              </a>
            </li>
            <li>
              <Image src={images.NuxtLogo} alt="Nuxt.js" width={width} height={height} className="inline-block mr-2" />
              <Image src={images.VueLogo} alt="Vue.js" width={width} height={height} className="inline-block mr-2" />
              <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">
                <strong>Nuxt.js / Vue.js</strong>
              </a>
            </li>
            <li>
              <Image src={images.PythonLogo} alt="Python" width={width} height={height} className="inline-block mr-2" />
              <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                <strong>Python</strong>
              </a>
            </li>
            <li>
              <Image src={images.CSharpLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
              <a href="https://docs.microsoft.com/fr-fr/dotnet/core/introduction" target="_blank" rel="noopener noreferrer">
                <strong>C# .NET</strong>
              </a>
            </li>
            <li>
              <Image src={images.NodeLogo} alt="Node.js" width={width} height={height} className="inline-block mr-2" />
              <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
                <strong>Node.js</strong>
              </a>
            </li>
          </ul>
        </span>
      );
    } else if (lowerCaseMessage.includes("resume")) {
      botResponse.push(
        <span>
          During my 3 years at Manitou Group, I developed a ticket management application and managed the deployment via Azure DevOps as well as integrating an automated testing tool for non-regression business tests.
          <br />
          <div>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Image src={images.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Image src={images.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <Image src={images.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://nuxtjs.org/docs" target="_blank" rel="noopener noreferrer">
              <Image src={images.NuxtLogo} alt="Nuxt.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">
              <Image src={images.VueLogo} alt="Vue.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
              <Image src={images.BootstrapLogo} alt="Bootstrap" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://docs.microsoft.com/fr-fr/dotnet/core/introduction" target="_blank" rel="noopener noreferrer">
              <Image src={images.CSharpLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0&WT.mc_id=dotnet-35129-website" target="_blank" rel="noopener noreferrer">
              <Image src={images.DotNetCoreLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
              <Image src={images.PythonLogo} alt="Python" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://sql.sh/" target="_blank" rel="noopener noreferrer">
              <Image src={images.SqlLogo} alt="SQL" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
              <Image src={images.GitLogo} alt="Git" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://azure.microsoft.com/en-us/products/devops" target="_blank" rel="noopener noreferrer">
              <Image src={images.AzureLogo} alt="Azure" width={width} height={height} className="inline-block mr-2" />
            </a>
          </div>

          <br />
          In 2021, I designed a mobile application to present the BDE-WIPS&apos; association, manage its events and the timetable for the school&apos;s students.
          <br />
          <div>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Image src={images.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Image src={images.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <Image src={images.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              <Image src={images.TypescriptLogo} alt="Typescript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer">
              <Image src={images.IonicLogo} alt="Ionic" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
              <Image src={images.ReactLogo} alt="React" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
              <Image src={images.BootstrapLogo} alt="Bootstrap" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
              <Image src={images.NodeLogo} alt="Node.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://sql.sh/" target="_blank" rel="noopener noreferrer">
              <Image src={images.SqlLogo} alt="SQL" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
              <Image src={images.GitLogo} alt="Git" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://azure.microsoft.com/en-us/products/devops" target="_blank" rel="noopener noreferrer">
              <Image src={images.AzureLogo} alt="Azure" width={width} height={height} className="inline-block mr-2" />
            </a>
          </div>
          <br />

          In 2020, I participated in the development on the company&apos;s new project, providing each customer with full administration of their company&apos;s network in 3D
          <br />
          <div>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Image src={images.HtmlLogo} alt="HTML" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Image src={images.CssLogo} alt="CSS" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <Image src={images.JsLogo} alt="JavaScript" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://symfony.com/doc/current/index.html" target="_blank" rel="noopener noreferrer">
              <Image src={images.SymfonyLogo} alt="Symfony" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" rel="noopener noreferrer">
              <Image src={images.ThreeJs} alt="Three.js" width={width} height={height} className="inline-block mr-2" />
            </a>
            <a href="https://docs.microsoft.com/fr-fr/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
              <Image src={images.CSharpLogo} alt=".NET Core" width={width} height={height} className="inline-block mr-2" />
            </a>
          </div>

        </span>
      );
    } 
    if (lowerCaseMessage.includes("contact")) {
      botResponse.push(
        <span>
          You can find me on <a href="https://www.linkedin.com/in/romain-martineau-8570/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a>, on my  <a href="https://github.com/Romain857" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Github</a> or by email at <a href="mailto:romainmart.85@gmail.com" className="text-blue-500 underline">romainmart.85@gmail.com</a>
        </span>
      );
    }
    if (lowerCaseMessage.includes("futur")) {
      botResponse.push("I'm looking for a new international experience or a french company in the west of france as a Full Stack Developer willing to support me over the next few years and organise my mobility in the future")
    } 
    if (lowerCaseMessage.includes("address")) {
      botResponse.push("I come from Vendée and I currently live in Nantes in France.")
    } 
    if (lowerCaseMessage.includes("education")) {
      botResponse.push(
        <span>During my 5 years of higher education as an application developer, I obtained : 
          <br />
          - Master / <strong>Title : Expert in computer science and information systems</strong> <br />
          - Bachelor / <strong>Title : Application Developer Designer</strong> <br />
          - Advanced Technician&apos;s Certificate or <strong>BTS SIO, software solutions and business applications</strong> option
        </span>
        )
    } 
    if (lowerCaseMessage.includes("more")) {
      botResponse.push(
        <span>You can ask me about my <strong>profile</strong> whith a simple <strong>hello</strong>, <strong>skills</strong> for core skills, <strong>resume</strong> for experiences, <strong>futur</strong> for my professional project, <strong>eduction</strong> for my diploma, <strong>address</strong> or <strong>contact</strong></span>
      );
    }
    if (botResponse.length === 0) {
      botResponse.push(
        <span>
          What did you say ?
          <br />
          Type <strong>more</strong> to know what you can ask me !
        </span>
      )
    }

    botResponse.forEach((response, index) => {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, time: currentTime, isBot: true },
        ]);
        setIsTyping(false);
      }, 1000 * (index + 1));
    });
  };

  const reload = () => {
    setMessages([]);
    setIsTyping(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages([
        {
          text: (
            <>
              Hello ! You can ask me about my <strong>profile</strong> whith a simple <strong>hello</strong>, <strong>resume</strong> for experiences, <strong>skills</strong> for core skills, <strong>resume</strong> for experiences, <strong>futur</strong> for my professional project, <strong>eduction</strong> for my diploma, <strong>address</strong> or <strong>contact</strong>, and I&apos;ll be happy to provide more information.
            </>
          ),
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
      <div className="flex items-center justify-between bg-[#ededfc] bg-opacity-100 md:rounded-tr-3xl p-4">
        <div className="flex items-center">
          <Link href="/resume">
            <Image src={images.photo} alt="Photo" width={60} height={50} className="rounded-full" />
          </Link>
          <div className="ml-8">
            <span className="text-lg text-black font-semibold">Romain Martineau</span>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-sm text-gray-600">{isTyping ? "is typing ..." : "Online"}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-10 md:mr-12 text-gray-600">
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
              className={`p-4 mt-2 shadow-md border border-gray-200 max-w-md w-fit ${msg.isBot ? "bg-white self-start md:ml-4 rounded-t-[20px] rounded-br-[20px] " : "bg-[#d7f8f4] self-end mr-4 rounded-t-[20px] rounded-bl-[20px]"}`}
            >
              <p className="text-gray-800 break-words">{msg.text}</p>
              <p className="text-sm text-gray-500 mt-2">{msg.time}</p>
            </div>
          ))}
          {isTyping && (
            <div className="self-start ml-4 p-3 rounded-lg shadow-md border bg-white border-gray-200"><BouncingDotsLoader /></div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Footer Input */}
      <div className="flex justify-center bg-gray-200 bg-opacity-100 md:rounded-br-3xl p-7">
        <button className="mr-3 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-300 transition duration-300 shadow-md flex items-center justify-center" onClick={handleAddEmoji}>
          <FontAwesomeIcon className="w-7 h-7 text-gray-700" icon={faFaceSmile} />
        </button>
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