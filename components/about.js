import Image from "next/image";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      className="minor-section scroll-mt-24 mmd:mt-16 mx-4 mt-12 flex flex-col sm:mx-0 md:flex-row md:items-start md:gap-4 lg:my-48"
      id="about"
    >
      <div className="flex flex-col">
        <div>
          <h2 className="sectionHeading text-hd2 text-primary mb-6 inline-block leading-none">
            About me
          </h2>
        </div>
        <p>
          Hi! My name is Bill,experienced and self-taught web developer. I
          am proficient with modern web development tools and I have a good
          approach to web development from idea brainstorming to product
          deployment. I also enjoy working in team while teaching and learning
          new things.
        </p>
        <p className="mt-2">
          A few technologies I have been working with recently:
        </p>
        <ul className="msm:grid-cols-1 mt-2 grid list-inside list-disc grid-cols-2 grid-rows-2 font-sans">
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
            Python <FaPython className="inline" />
          </li>
          <li>
            Django <SiDjango className="inline" />
          </li>         
          <li>
            Angular <FaAngular className="inline" />
          </li>
        </ul>
      </div>
      <div className="picture shadow-small hover:shadow-large relative mt-4 w-full md:mt-0 md:flex-shrink">
        <div
          id="overlay"
          className="absolute right-0 top-0 bottom-0 left-0"
        ></div>
        {
          theme === "dark" ? <Image
          src="https://res.cloudinary.com/nobill/image/upload/v1644462192/portfolio2021/poster_dark-05.png"         
          alt="me"
          width="512"
          height="512"
          layout="responsive"
        /> : <Image
        src="https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"         
        alt="me"
        width="512"
        height="512"
        layout="responsive"
      />
        }
        {/* <Image
          src={
            theme === "dark"
              ? "https://res.cloudinary.com/nobill/image/upload/v1644462192/portfolio2021/poster_dark-05.png"
              : "https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"
          }
          alt="me"
          width="512"
          height="512"
          layout="responsive"
        /> */}
      </div>
    </section>
  );
}
