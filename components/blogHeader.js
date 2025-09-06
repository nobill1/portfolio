import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export default function BlogHeader() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="fixed z-10 w-screen bg-white bg-opacity-80 backdrop-blur-2xl dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-2xl">
        <div className="container left-0 right-0 mx-auto flex justify-between p-4">
          <Link href="/" className="logo z-20 flex justify-center">
              <Image
                src={theme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
                alt="logo"
                width="47"
                height="48"
                className=""
              />            
          </Link>

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
          </div>
        </div>
      </div>
    </>
  );
}
