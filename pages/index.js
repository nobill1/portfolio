import Link from "next/link";
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
      {preloader ? (
        <div className="loader-wrapper absolute">
          <Logo className="logoSplash animate-pulse" />
        </div>
      ) : (
        <>
          <Header />
          <main className="container pt-20 mx-auto md:px-4 lg:px-6">
            <Presentation />
            <About />
            <Projects />
            <Technologies/>
            <section
              className="flex flex-col justify-center minor-section mx-4 mt-12 sm:mx-0 scroll-mt-24"
              id="contact"
            >
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

export default Index;
