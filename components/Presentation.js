import Link from "next/link";
import Illustration from "./illustration";
import { FaLinkedinIn, FaCodepen, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Presentation() {
  return (
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
            className="text-primary mr-2 hover:text-secondary icon text-2xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://codepen.io/Bill1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mr-2 hover:text-secondary icon text-2xl"
          >
            <FaCodepen />
          </a>
          <a
            href="https://github.com/nobill1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mr-2 hover:text-secondary icon text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/go_bill_go"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mr-2 hover:text-secondary icon text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/go_bill_go/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary icon text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mmd:hidden flex flex-1 justify-center items-center w-60 xl:w-80">
        <Illustration className="w-60 xl:w-80" />
      </div>
    </section>
  );
}

export default Presentation;
