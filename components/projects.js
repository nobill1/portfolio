import Link from "next/link";
import Image from "next/image";
import data from "../data.json";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      className="minor-section mx-4 mt-12 flex scroll-mt-24 flex-col sm:mx-0 lg:my-48 mmd:mt-16"
      id="projects"
    >
      <div>
        <h2 className="sectionHeading mb-6 inline-block text-hd2 leading-none text-primary">
          Stuff I&apos;ve built
        </h2>
      </div>
      <div className="grid grid-flow-row gap-4 sm:grid-cols-2">
        {data.projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="projectImg relative mt-4 w-auto shadow-small hover:shadow-large">
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
              </div>
              <h3 className="mt-2 text-hd3">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="bg-secondary px-2 py-1 font-bold leading-none text-primary dark:text-red-900 dark:bg-rose-500"
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
                  <a
                    className={
                      project.repo.length < 1
                        ? "hidden"
                        : "icon mr-2 text-primary hover:text-secondary dark:hover:text-rose-500"
                    }
                  >
                    <FaGithub className="inline text-xl" />
                  </a>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a
                    className={
                      project.live.length < 1
                        ? "hidden"
                        : "icon mr-2 text-primary hover:text-secondary dark:hover:text-rose-500"
                    }
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
