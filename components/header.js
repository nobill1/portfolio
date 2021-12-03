import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Head>
        <title>Nguimeya Bill-gates</title>
      </Head>
      <div className="flex container justify-between items-center w-screen p-4 fixed bg-white sm:justify-center" id="header">
        <Link href="/">
          <a className="uppercase msm:hidden">about</a>
        </Link>
        <Link href="/">
          <a className="uppercase msm:hidden">technologies</a>
        </Link>
        <Link href="/">
          <a className="flex justify-center z-20 sm:mx-14 logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width="47"
              height="48"
              className=""
            />
          </a>
        </Link>
        <Link href="/">
          <a className="uppercase msm:hidden">projects</a>
        </Link>
        <Link href="/">
          <a className="uppercase msm:hidden">contact</a>
        </Link>

        <button onClick={showSidebar} className="sm:hidden cursor-pointer focus:border-none">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H21M1 11.5H21M1 21H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeDasharray="4 4"
            />
          </svg>
        </button>

        <nav className={sidebar ? "nav-menu" : "hidden"}>
          <div className="flex justify-end w-full mt-8">
            <button onClick={showSidebar} className="mr-7 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L2 22M2 2L22 22" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" Dasharray="4 4"/>
            </svg>
            
            </button>
          </div>
          <ul className="mt-16 flex flex-col">
            <li className="ml-4 mb-8" onClick={showSidebar}>
              <Link href="/">
                <a className="uppercase text-secondary text-xl tracking-wider hover:text-white">about</a>
              </Link>
            </li>
            <li className="ml-4 mb-8" onClick={showSidebar}>
              <Link href="/destination">
                <a className="uppercase text-secondary text-xl tracking-wider hover:text-white">technologies</a>
              </Link>
            </li>
            <li className="ml-4 mb-8" onClick={showSidebar}>
              <Link href="/crew">
                <a className="uppercase text-secondary text-xl tracking-wider hover:text-white">projects</a>
              </Link>
            </li>
            <li className="ml-4 mb-8" onClick={showSidebar}>
              <Link href="/technology">
                <a className="uppercase text-secondary text-xl tracking-wider hover:text-white">contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
