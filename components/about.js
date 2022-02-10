import Image from "next/image";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      className="minor-section mx-4 mt-12 flex scroll-mt-24 flex-col sm:mx-0 md:flex-row md:items-start md:gap-4 lg:my-48 mmd:mt-16"
      id="about"
    >
      <div className="flex flex-col">
        <div>
          <h2 className="sectionHeading mb-6 inline-block text-hd2 leading-none text-primary">
            About me
          </h2>
        </div>
        <p>
          Hi! My name is Bill-gates,experienced and self-taught web developer. I
          am proficient with modern web development tools and I have a good
          approach to web development from idea brainstorming to product
          deployment. I also enjoy working in team while teaching and learning
          new things.
        </p>
        <p className="mt-2">
          A few technologies I have been working with recently:
        </p>
        <ul className="mt-2 grid list-inside list-disc grid-cols-2 grid-rows-2 font-sans msm:grid-cols-1">
          <li>
            HTML <FaHtml5 className="inline" />
          </li>
          <li>
            CSS <FaCss3 className="inline" />
          </li>
          <li>
            JavaScript <FaJs className="inline" />
          </li>
          <li>
            React <FaReact className="inline" />
          </li>
          <li>
            NextJS <FaReact className="inline" />
          </li>
          <li>
            NodeJS <FaNodeJs className="inline" />
          </li>
          <li>
            GraphQL <SiGraphql className="inline" />
          </li>
        </ul>
      </div>
      <div className="picture relative mt-4 w-full shadow-small hover:shadow-large md:mt-0 md:flex-shrink">
        <div
          id="overlay"
          className="absolute right-0 top-0 bottom-0 left-0"
        ></div>
        <Image
          src={
            theme === "dark"
              ? "https://res.cloudinary.com/nobill/image/upload/v1644462192/portfolio2021/poster_dark-05.png"
              : "https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"
          }
          alt="me"
          width="512"
          height="512"
          layout="responsive"
        />
      </div>
    </section>
  );
}
