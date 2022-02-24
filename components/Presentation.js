import Link from "next/link";
import Illustration from "./illustration";
import {
  FaLinkedinIn,
  FaCodepen,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";

function Presentation() {
  return (
    <section className="mx-4 flex flex-col sm:mx-0 md:flex-row xl:justify-around">
      <div className="presentation flex flex-col justify-center text-center md:text-left">
        <p>Hi, I am</p>
        <h1 className="font-body text-hd1 from-secondary to-primary dark:from-rose-500 msm:text-5xl break-words bg-gradient-to-r bg-clip-text leading-snug text-transparent dark:to-red-900 md:max-w-md">
          Nguimeya Bill-gates
        </h1>
        <p className="mt-6 mb-10 md:max-w-md">
          front end developer and graphic designer from{" "}
          <span className="text-secondary dark:text-rose-500">Yaounde</span>,
          Cameroon. I specialize Web development and occasionally designing
          digital experiences.
        </p>
        <div className="mb-6">
          <Link href="https://resume.io/r/7bUEJMzgT" target="_blank">
            <a className="button">Resume</a>
          </Link>
        </div>
        <div className="mt-5 flex justify-center md:justify-start">
          <a
            href="https://www.hackerrank.com/no_bill"
            target="_blank"
            rel="noopener noreferrer"
            className="icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2 text-2xl"
          >
            <FaHackerrank />
          </a>
          <a
            href="https://github.com/nobill1"
            target="_blank"
            rel="noopener noreferrer"
            className="icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nguimeya-bill-gates-9b614b146"
            target="_blank"
            rel="noopener noreferrer"
            className="icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2 text-2xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://codepen.io/Bill1"
            target="_blank"
            rel="noopener noreferrer"
            className="icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2 text-2xl"
          >
            <FaCodepen />
          </a>
          <a
            href="https://www.instagram.com/go_bill_go/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon text-primary hover:text-secondary dark:hover:text-rose-500 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mmd:hidden flex w-60 flex-1 items-center justify-center xl:w-80">
        <Illustration className="w-60 xl:w-80" />
      </div>
    </section>
  );
}

export default Presentation;
