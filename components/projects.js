import Link from 'next/link'
import Image from 'next/image'
import data from "../data.json";

export default function Projects() {
  return (
    <section
      className="flex flex-col minor-section mx-4 mt-12 mmd:mt-16 sm:mx-0 scroll-mt-24 lg:my-48"
      id="projects"
    >
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
                <div id="overlay" className="w-full h-full absolute"></div>
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
                  <a
                    className={
                      project.repo.length < 1
                        ? "hidden"
                        : "text-primary mr-2 hover:text-secondary icon"
                    }
                  >
                    <i className="lni lni-github text-xl"></i>
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
                        : "text-primary mr-2 hover:text-secondary icon"
                    }
                  >
                    <i className="lni lni-website text-xl"></i>
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
