import Link from "next/link";
import Illustration from "./illustration";
import {
  FaLinkedinIn,
  FaCodepen,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Presentation() {
  return (
    <section className="mx-4 flex flex-col sm:mx-0 md:flex-row xl:justify-around">
      <div className="presentation flex flex-col justify-center text-center md:text-left">
        <p>Hi, I am</p>
        <h1 className="break-words font-body text-hd1 leading-snug bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-rose-500 dark:to-red-900 text-transparent md:max-w-md msm:text-5xl">
          Nguimeya Bill-gates
        </h1>
        <p className="mt-6 mb-10 md:max-w-md">
          front end developer and graphic designer from{" "}
          <span className="text-secondary dark:text-rose-500">Yaounde</span>, Cameroon. I
          specialize Web development and occasionally designing digital
          experiences.
        </p>
        <div className="mb-6">
          <Link href="https://resume.io/r/7bUEJMzgT" target="_blank">
            <a className="button">Resume</a>
          </Link>
        </div>
        <div className="mt-5 flex justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/nguimeya-bill-gates-9b614b146"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mr-2 text-2xl text-primary hover:text-secondary dark:hover:text-rose-500"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://codepen.io/Bill1"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mr-2 text-2xl text-primary hover:text-secondary dark:hover:text-rose-500"
          >
            <FaCodepen />
          </a>
          <a
            href="https://github.com/nobill1"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mr-2 text-2xl text-primary hover:text-secondary dark:hover:text-rose-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/go_bill_go"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mr-2 text-2xl text-primary hover:text-secondary dark:hover:text-rose-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/go_bill_go/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon text-2xl text-primary hover:text-secondary dark:hover:text-rose-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="flex w-60 flex-1 items-center justify-center xl:w-80 mmd:hidden">
        <Illustration className="w-60 xl:w-80" />
      </div>
    </section>
  );
}

export default Presentation;
