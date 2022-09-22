import { useState, useRef } from "react";
import { TiSpiral } from "react-icons/ti";
import { CgCloseO } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import data from "../data.json";

export default function Interview() {
  const [selectedId, setSelectedId] = useState(null);
  const constraintRef = useRef(null)

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };  

  const handleChildElementClick = (e) => {
    e.stopPropagation()    
 }

  return (
    <section
      className="minor-section mx-4 mt-12 flex scroll-mt-24 flex-col sm:mx-0 lg:my-48 mmd:mt-16 relative"
      id="projects"
    >
      <div>
        <h2 className="sectionHeading mb-6 inline-block text-hd2 leading-none text-primary">
          Interview spiral <TiSpiral className="inline animate-spin text-3xl" />
        </h2>
      </div>
      <div className="interview-grid">
        {data.interviews.map((interview, index) => {
          return (
            <motion.div
              className="interview-items p-4 shadow-small hover:cursor-blue-pointer hover:shadow-large dark:hover:cursor-red-pointer"
              key={index}
              layout={index}
              onClick={() => setSelectedId(index)}
            >
              <motion.h3 className="mt-2 text-hd3">{interview.title}</motion.h3>
              <motion.p className="line-clamp-2">
                {interview.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {selectedId != null ? (
          <motion.div
            className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 z-20"            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={constraintRef}
            onClick={() => setSelectedId(null)}
          >
            <motion.div           
              layout={selectedId}
              className="modal p-4 flex flex-col"
              drag
              dragConstraints={constraintRef}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => handleChildElementClick(e)}
            >
              <motion.button onClick={() => setSelectedId(null)} className="self-end text-primary hover:text-secondary hover:cursor-blue-pointer dark:hover:cursor-red-pointer dark:text-red-900 dark:hover:text-rose-500">
                <CgCloseO className="text-2xl"/>
              </motion.button>
              <motion.h3 className="mt-2 text-hd3">
                {data.interviews[selectedId].title}
              </motion.h3>
              <motion.p className="line-clamp-2">
                {data.interviews[selectedId].description}
              </motion.p>
              <motion.div className="flex flex-wrap gap-2 mt-4">
                {data.interviews[selectedId].tech.map((item, index) => {
                  return (
                    <motion.p
                      key={index}
                      className="bg-secondary px-2 py-1 font-bold leading-none text-primary dark:bg-rose-500 dark:text-red-900"
                    >
                      {item}
                    </motion.p>
                  );
                })}
              </motion.div>
              <Link href={data.interviews[selectedId].live}>
                  <a
                    className="icon text-primary hover:text-secondary dark:hover:text-rose-500 mr-2 mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="inline text-xl" />
                  </a>
                </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
