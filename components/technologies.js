import {
  FaHtml5,
  FaCss3,
  FaGit,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiSvelte,
  SiPostgresql
} from "react-icons/si";
import {AiOutlineConsoleSql} from "react-icons/ai"

export default function Technologies() {
  return (
    <section
      className="minor-section lg:my-30 mx-4 my-12 flex scroll-mt-24 flex-col sm:mx-0 mmd:mt-16"
      id="technologies"
    >
      <div>
        <h2 className="sectionHeading mb-6 inline-block text-hd2 leading-none text-primary">
          Technologies
        </h2>
      </div>
      <div className="tech-grid">
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaHtml5 className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">HTML5</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaCss3 className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">CSS3</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaJs className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Javascript</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <SiTypescript className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Typescript</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <SiSvelte className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Svelte</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaReact className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">React</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <SiNextdotjs className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">NextJS</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaVuejs className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Vue</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaAngular className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Angular</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaGit className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Git</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaNodeJs className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">NodeJS</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <SiGraphql className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Graphql</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <SiMongodb className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Mongodb</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <AiOutlineConsoleSql className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">SQL</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <SiPostgresql className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">PostgreSQL</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <i className="lni lni-ux mb-1 text-5xl text-secondary dark:text-rose-500"></i>
          <p className="font-body">UI/UX</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <FaFigma className="mb-1 text-5xl text-secondary dark:text-rose-500" />
          <p className="font-body">Figma</p>
        </div>
        <div className="tech-items flex flex-col items-center justify-center py-3">
          <i className="lni lni-adobe mb-1 text-5xl text-secondary dark:text-rose-500"></i>
          <p className="font-body">Adobe Suite</p>
        </div>
      </div>
      <div className="mt-3 text-center">
        <p className="font-body">And many more...</p>
      </div>
    </section>
  );
}
