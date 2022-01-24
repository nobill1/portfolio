import Image from 'next/image'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'

export default function About() {
  return (
    <section
      className="flex flex-col minor-section mx-4 mt-12 mmd:mt-16 sm:mx-0 md:flex-row md:items-start md:gap-4 scroll-mt-24 lg:my-48"
      id="about"
    >
      <div className="flex flex-col">
        <div>
          <h2 className="text-primary text-hd2 sectionHeading leading-none inline-block mb-6">
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
        <ul className="mt-2 list-inside list-disc font-sans grid grid-rows-2 grid-cols-2 msm:grid-cols-1">
          <li>
            HTML <FaHtml5 className='inline'/>
          </li>
          <li>
            CSS <FaCss3 className='inline'/>
          </li>
          <li>
            JavaScript <FaJs className='inline'/>
          </li>
          <li>
            React <FaReact className='inline'/>
          </li>
          <li>
            NextJS <FaReact className='inline'/>
          </li>
          <li>
            NodeJS <FaNodeJs className='inline'/>
          </li>
          <li>
            GraphQL
          </li>
        </ul>
      </div>
      <div className="picture relative shadow-small hover:shadow-large w-full md:flex-shrink md:mt-0 mt-4">
        <div
          id="overlay"
          className="right-0 top-0 bottom-0 left-0 absolute"
        ></div>
        <Image
          src="https://res.cloudinary.com/nobill/image/upload/v1631955604/portfolio2021/poster-01.png"
          alt="me"
          width="512"
          height="512"
          layout="responsive"
        />
      </div>
    </section>
  );
}
