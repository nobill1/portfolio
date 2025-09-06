import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="fixed z-10 w-screen bg-white bg-opacity-80 backdrop-blur-2xl dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-2xl">
        <div className="container left-0 right-0 mx-auto flex items-center justify-between p-4">
          <div className="flex items-center sm:mx-auto">
            <Link href="#about" className="uppercase leading-none transition-colors delay-100 hover:text-secondary dark:hover:text-rose-500 sm:mr-10 msm:hidden">              
                about              
            </Link>
            <Link href="#projects" className="uppercase leading-none transition-colors delay-100 hover:text-secondary dark:hover:text-rose-500 msm:hidden">              
                projects              
            </Link>
            <Link href="/" className="logo z-20 flex justify-center sm:mx-14">              
                <Image
                  src={theme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
                  alt="logo"
                  width="47"
                  height="48"
                  className=""
                />              
            </Link>
            <Link href="#technologies" className="uppercase leading-none transition-colors delay-100 hover:text-secondary dark:hover:text-rose-500 sm:mr-10 msm:hidden">              
                technologies              
            </Link>
            <Link href="#contact" className="uppercase leading-none transition-colors delay-100 hover:text-secondary dark:hover:text-rose-500 msm:hidden">              
                contact              
            </Link>
          </div>

          <div className="flex gap-2">
            {theme && currentTheme === "dark" ? (
              <button
                className="t-btn text-2xl text-yellow-300"
                onClick={() => setTheme("light")}
              >
                <HiSun />
              </button>
            ) : (
              <button
                className="t-btn text-2xl text-gray-500"
                onClick={() => setTheme("dark")}
              >
                <HiMoon />
              </button>
            )}

            <button
              onClick={showSidebar}
              className="text-2xl text-primary transition-colors delay-100 hover:text-secondary focus:border-none dark:text-red-900 dark:hover:text-rose-500 sm:hidden"
            >
              <FaBars />
            </button>
          </div>

          <nav className={sidebar ? "nav-menu" : "hidden"}>
            <div className="container mx-auto">
              <div className="mt-8 flex w-full justify-end">
                <button
                  onClick={showSidebar}
                  className="mr-7 text-2xl text-secondary transition-colors delay-100 hover:text-white dark:text-rose-500 dark:hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="mt-16 flex flex-col">
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#about" className="text-xl uppercase tracking-wider text-secondary transition-colors delay-100 hover:text-white dark:text-rose-500 dark:hover:text-white">                    
                      about                    
                  </Link>
                </li>
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#technologies" className="text-xl uppercase tracking-wider text-secondary transition-colors delay-100 hover:text-white dark:text-rose-500 dark:hover:text-white">                    
                      technologies                    
                  </Link>
                </li>
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#projects" className="text-xl uppercase tracking-wider text-secondary transition-colors delay-100 hover:text-white dark:text-rose-500 dark:hover:text-white">                    
                      projects                    
                  </Link>
                </li>
                <li className="ml-4 mb-8" onClick={showSidebar}>
                  <Link href="#contact" className="text-xl uppercase tracking-wider text-secondary transition-colors delay-100 hover:text-white dark:text-rose-500 dark:hover:text-white">                    
                      contact                    
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
