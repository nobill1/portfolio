export default function Technologies() {
  return (
    <section
      className="flex flex-col minor-section mx-4 mt-12 mmd:mt-16 sm:mx-0 scroll-mt-24 lg:my-48"
      id="technologies"
    >
      <div>
        <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
          Technologies
        </h2>
      </div>
      <div className="tech-grid">
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-html5 text-5xl text-secondary mb-1"></i>
          <p className="font-body">HTML5</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-css3 text-5xl text-secondary mb-1"></i>
          <p className="font-body">CSS3</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-javascript text-5xl text-secondary mb-1"></i>
          <p className="font-body">Javascript</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-react text-5xl text-secondary mb-1"></i>
          <p className="font-body">React</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-react text-5xl text-secondary mb-1"></i>
          <p className="font-body">NextJS</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-git text-5xl text-secondary mb-1"></i>
          <p className="font-body">Git</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-nodejs text-5xl text-secondary mb-1"></i>
          <p className="font-body">NodeJS</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-ux text-5xl text-secondary mb-1"></i>
          <p className="font-body">UI/UX</p>
        </div>
        <div className="flex justify-center items-center flex-col tech-items py-3">
          <i className="lni lni-figma text-5xl text-secondary mb-1"></i>
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
