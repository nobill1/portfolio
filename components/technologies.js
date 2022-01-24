import { FaHtml5, FaCss3, FaGit, FaJs, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'

export default function Technologies() {
  return (
    <section
      className="flex flex-col minor-section mx-4 my-12 mmd:mt-16 sm:mx-0 scroll-mt-24 lg:my-30"
      id="technologies"
    >
      <div>
        <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
          Technologies
        </h2>
      </div>
      <div className="tech-grid">
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaHtml5 className="text-5xl text-secondary mb-1"/>
          <p className="font-body">HTML5</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaCss3 className="text-5xl text-secondary mb-1"/>      
          <p className="font-body">CSS3</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaJs className="text-5xl text-secondary mb-1"/>          
          <p className="font-body">Javascript</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaReact className="text-5xl text-secondary mb-1"/>          
          <p className="font-body">React</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaReact className="text-5xl text-secondary mb-1"/>          
          <p className="font-body">NextJS</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaGit className="text-5xl text-secondary mb-1"/>          
          <p className="font-body">Git</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaNodeJs className="text-5xl text-secondary mb-1"/>          
          <p className="font-body">NodeJS</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">          
          <i className="lni lni-ux text-5xl text-secondary mb-1"></i>
          <p className="font-body">UI/UX</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <FaFigma className="text-5xl text-secondary mb-1"/>          
          <p className="font-body">Figma</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">          
          <i className="lni lni-adobe text-5xl text-secondary mb-1"></i>
          <p className="font-body">Adobe Suite</p>
        </div>
      </div>
      <div className="mt-3 text-center">
        <p className="font-body">And many more...</p>
      </div>
    </section>
  );
}
