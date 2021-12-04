import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Illustration from "../components/illustration";
import data from "../data.json";
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
          <Logo className="logoSplash animate-pulse" />
        </div>
      ) : (
        <>
          <Header />
          <main className="container pt-20 mx-auto md:px-4 lg:px-6">
            <section className="flex flex-col mx-4 sm:mx-0 md:flex-row xl:justify-around">
              <div className="flex flex-col text-center justify-center presentation md:text-left">
                <p>Hi, I am</p>
                <h1 className="font-body text-hd1 leading-snug text-secondary msm:text-5xl break-words md:max-w-md">
                  Nguimeya Bill-gates
                </h1>
                <p className="mt-6 mb-10 md:max-w-md">
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
                <div className="flex mt-5 justify-center md:justify-start">
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
              <div className="mmd:hidden flex flex-1 justify-center items-center w-60 xl:w-80">
                <Illustration className="w-60 xl:w-80"/>
              </div>
            </section>
            <section className="flex flex-col minor-section mx-4 mt-12 mmd:mt-16 sm:mx-0 md:flex-row md:items-start md:gap-4" id="about">
              <div className="flex flex-col">
                <div>
                  <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
                    About me
                  </h2>
                </div>
                <p>
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
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>NextJS</li>                  
                  <li>NodeJS</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div className="picture relative shadow-small hover:shadow-large w-full md:flex-shrink md:mt-0 mt-4">
                <div id="overlay" className="right-0 top-0 bottom-0 left-0 absolute"></div>
                <Image
                  src="https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"
                  alt="me"
                  width="512"
                  height="512"
                  layout="responsive"                  
                />
              </div>
            </section>
            <section className="flex flex-col minor-section mx-4 mt-12 mmd:mt-16 sm:mx-0" id="projects">
              <div>
                <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
                  Stuff I&apos;ve built
                </h2>
              </div>
              <div className="grid grid-flow-row sm:grid-cols-2 gap-4">
                {data.projects.map((project, index) => {
                  return (
                    <div key={project.id}>
                      <div className="projectImg relative shadow-small hover:shadow-large mt-4 w-auto">
                        <p>{project[index]}</p>
                        <div
                          id="overlay"
                          className="w-full h-full absolute"
                        ></div>
                        <Image
                          src={project.image}
                          alt="me"
                          width="2880"
                          height="1674"
                          layout="responsive"
                          className="h-full w-auto"
                        />
                      </div>
                      <h3 className="text-hd3 mt-2">{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item, index) => {
                          return (
                            <p
                              key={index}
                              className="px-2 py-1 bg-secondary text-primary font-bold leading-none"
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                      <div className="mt-2">
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <a className="text-primary mr-2 hover:text-secondary icon">
                            <i className="lni lni-github text-xl"></i>
                          </a>
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <a className="text-primary mr-2 hover:text-secondary icon">
                            <i className="lni lni-website text-xl"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="flex flex-col minor-section mx-4 mt-12 mmd:mt-16 sm:mx-0" id="technologies">
              <div>
                <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
                  Technologies
                </h2>
              </div>
              <div className="tech-grid">
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-html5 text-5xl text-secondary mb-1"></i>
                  <p className="font-body">HTML5</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-css3 text-5xl text-secondary mb-1"></i>
                  <p className="font-body">CSS3</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-javascript text-5xl text-secondary mb-1"></i>
                  <p className="font-body">Javascript</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-react text-5xl text-secondary mb-1"></i>
                  <p className="font-body">React</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-react text-5xl text-secondary mb-1"></i>
                  <p className="font-body">NextJS</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-git text-5xl text-secondary mb-1"></i>
                  <p className="font-body">Git</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-nodejs text-5xl text-secondary mb-1"></i>
                  <p className="font-body">NodeJS</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-ux text-5xl text-secondary mb-1"></i>
                  <p className="font-body">UI/UX</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-figma text-5xl text-secondary mb-1"></i>
                  <p className="font-body">Figma</p>
                </div>
                <div className="flex justify-center items-center flex-col tech-items py-3">
                  <i className="lni lni-adobe text-5xl text-secondary mb-1"></i>
                  <p className="font-body">Adobe Suite</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="font-body">And many more...</p>
              </div>
            </section>
            <section className="flex flex-col justify-center minor-section mx-4 mt-12 sm:mx-0" id="contact">
              <div>
                <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
                  Contact
                </h2>
              </div>
              <div className="text-center">
                <p className="mx-auto">
                  Need help or just want to say hi? Go ahead! Don&apos;t be shy.
                </p>
              </div>

              <div className="mt-3 py-md flex justify-center">
                <Link
                  href="mailto:bnguimeya007@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a className="button">Get in touch!</a>
                </Link>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
