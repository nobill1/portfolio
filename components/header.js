import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Head>
        <title>Nguimeya Bill-gates</title>
      </Head>
      <div className="w-screen fixed z-10 backdrop-blur-2xl" id="header">
        <div className="container mx-auto left-0 right-0 flex justify-between items-center p-4 sm:justify-center">
          <Link href="#about">
            <a className="uppercase msm:hidden hover:text-secondary sm:mr-10 transition-colors delay-100">
              about
            </a>
          </Link>
          <Link href="#projects">
            <a className="uppercase msm:hidden hover:text-secondary transition-colors delay-100">
              projects
            </a>
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
          <Link href="#technologies">
            <a className="uppercase msm:hidden hover:text-secondary sm:mr-10 transition-colors delay-100">
              technologies
            </a>
          </Link>
          <Link href="#contact">
            <a className="uppercase msm:hidden hover:text-secondary transition-colors delay-100">contact</a>
          </Link>

          <button
            onClick={showSidebar}
            className="sm:hidden focus:border-none text-2xl text-primary hover:text-secondary transition-colors delay-100"
          >
            <FaBars />
          </button>

          <nav className={sidebar ? "nav-menu" : "hidden"}>
            <div className="container mx-auto">
              <div className="flex justify-end w-full mt-8">
                <button
                  onClick={showSidebar}
                  className="mr-7 text-2xl text-secondary hover:text-white transition-colors delay-100"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="mt-16 flex flex-col">
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#about">
                    <a className="uppercase text-secondary text-xl tracking-wider hover:text-white transition-colors delay-100">
                      about
                    </a>
                  </Link>
                </li>
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#technologies">
                    <a className="uppercase text-secondary text-xl tracking-wider hover:text-white transition-colors delay-100">
                      technologies
                    </a>
                  </Link>
                </li>
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#projects">
                    <a className="uppercase text-secondary text-xl tracking-wider hover:text-white transition-colors delay-100">
                      projects
                    </a>
                  </Link>
                </li>
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#contact">
                    <a className="uppercase text-secondary text-xl tracking-wider hover:text-white transition-colors delay-100">
                      contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
