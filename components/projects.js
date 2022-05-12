import Link from "next/link";
import Image from "next/image";
import data from "../data.json";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      className="minor-section scroll-mt-24 mmd:mt-16 mx-4 mt-12 flex flex-col sm:mx-0 lg:my-48"
      id="projects"
    >
      <div>
        <h2 className="sectionHeading text-hd2 text-primary mb-6 inline-block leading-none">
          Stuff I&apos;ve built
        </h2>
      </div>
      <div className="grid grid-flow-row gap-4 sm:grid-cols-2">
        {data.projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="projectImg shadow-small hover:shadow-large relative mt-4 w-auto">
                <Link href={project.live}>
                  <a target="_blank" rel="noopener noreferrer">
                    <p>{project[index]}</p>
                    <div id="overlay" className="absolute h-full w-full"></div>
                    <Image
                      src={project.image}
                      alt="me"
                      width="2880"
                      height="1674"
                      layout="responsive"
                      className="h-full w-auto"
                    />
                  </a>
                </Link>
              </div>
              <h3 className="text-hd3 mt-2">
                <Link href={project.live}>
                  <a target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </Link>
              </h3>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="bg-secondary text-primary dark:bg-rose-500 px-2 py-1 font-bold leading-none dark:text-red-900"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
              <div className="mt-2">
                <Link href={project.repo}>
                  <a
                    className={
                      project.repo.length < 1
                        ? "hidden"
                        : "icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="inline text-xl" />
                  </a>
                </Link>
                <Link href={project.live}>
                  <a
                    className={
                      project.live.length < 1
                        ? "hidden"
                        : "icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="inline text-xl" />
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
