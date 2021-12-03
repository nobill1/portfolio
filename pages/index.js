import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Illustration from "../components/illustration";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {" "}
      {preloader ? (
        <div className="loader-wrapper absolute">
          <Logo className="logoSplash" />
        </div>
      ) : (
        <>
          <Header />
          <main className="container pt-20">
            <section className="flex flex-col mx-4">
              <div className="flex flex-col text-center justify-center presentation">
                <p>Hi, I am</p>
                <h1 className="font-body text-hd1 leading-snug text-secondary">
                  Nguimeya Bill-gates
                </h1>
                <p className="mt-6 mb-10">
                  front end developer and graphic designer from{" "}
                  <span className="text-secondary">Yaounde</span>, Cameroon. I
                  specialize Web development and occasionally designing digital
                  experiences.
                </p>
                <div className="mb-6">
                  <Link href="https://resume.io/r/7bUEJMzgT" target="_blank">
                    <a className="button">Resume</a>
                  </Link>
                </div>
                <div className="flex mt-5 justify-center">
                  <a
                    href="https://www.linkedin.com/in/nguimeya-bill-gates-9b614b146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mr-2 hover:text-secondary icon"
                  >
                    <i className="lni lni-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="https://codepen.io/Bill1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mr-2 hover:text-secondary icon"
                  >
                    <i className="lni lni-codepen text-2xl"></i>
                  </a>
                  <a
                    href="https://github.com/nobill1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mr-2 hover:text-secondary icon"
                  >
                    <i className="lni lni-github text-2xl"></i>
                  </a>
                  <a
                    href="https://twitter.com/go_bill_go"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mr-2 hover:text-secondary icon"
                  >
                    <i className="lni lni-twitter text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/go_bill_go/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary icon"
                  >
                    <i className="lni lni-instagram-original text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="mmd:hidden flex flex-1">
                <Illustration />
              </div>
            </section>
            <section className="flex flex-col minor-section mx-4 mt-12">
              <div className="flex flex-col">
                <div>
                  <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block">
                    About me
                  </h2>
                </div>
                <p className="mt-4">
                  Hi! My name is Bill-gates,experienced and self-taught web
                  developer. I am proficient with modern web development tools
                  and I have a good approach to web development from idea
                  brainstorming to product deployment. I also enjoy working in
                  team while teaching and learning new things.
                </p>
                <p className="mt-2">
                  A few technologies I have been working with recently:
                </p>
                <ul className="mt-2 list-inside list-disc font-mono grid grid-rows-2 grid-cols-2 msm:grid-cols-1">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>NodeJS</li>
                  <li>Adobe Illustrator</li>
                </ul>
              </div>
              <div className="picture relative shadow-small hover:shadow-large w-full mt-4">
                <div id="overlay" className="w-full h-full absolute"></div>
                <Image
                  src="https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"
                  alt="me"
                  width="1296"
                  height="1728"
                  className="h-full w-auto"
                />
              </div>
            </section>
            <section className="flex flex-col minor-section mx-4 mt-12">
              <div>
                <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block">
                  Stuff I've built
                </h2>
              </div>   
              <div className="grid grid-flow-col">
              
              </div>           
            </section>
          </main>
        </>
      )}
    </>
  );
}
