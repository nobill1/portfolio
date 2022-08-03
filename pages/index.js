import Link from "next/link";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Presentation from "../components/Presentation";
import About from "../components/about";
import styles from "../styles/Home.module.css";
import Projects from "../components/projects";
import Technologies from "../components/technologies";

function Index() {
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
      <Head>
        <title>Portfolio / Nguimeya Bill-gates</title>
      </Head>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <Logo className="logoSplash w-auto" />
        </div>
      ) : (
        <>
          <Header />
          <main className="container mx-auto pt-20 md:px-4 lg:px-6">
            <Presentation />
            <About />
            <Projects />
            <Technologies />
            <section
              className="minor-section mx-4 mt-12 flex scroll-mt-24 flex-col justify-center sm:mx-0"
              id="blog"
            >
              <div>
                <h2 className="sectionHeading mb-6 inline-block text-hd2 leading-none text-primary">
                  Blog
                </h2>
              </div>
              <div className="text-center">
                <h3 className="mx-auto bg-gradient-to-r from-primary to-secondary bg-clip-text text-[150px] leading-none text-transparent dark:from-red-900 dark:to-rose-500 msm:text-5xl">
                  Coming soon!
                </h3>
              </div>
            </section>
            <section
              className="minor-section mx-4 mt-12 flex scroll-mt-24 flex-col justify-center sm:mx-0"
              id="contact"
            >
              <div>
                <h2 className="sectionHeading mb-6 inline-block text-hd2 leading-none text-primary">
                  Contact
                </h2>
              </div>
              <div className="text-center">
                <p className="mx-auto">
                  Need help or just want to say hi? Go ahead! Don&apos;t be shy.
                </p>
              </div>

              <div className="py-md mt-3 flex justify-center">
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

export default Index;
