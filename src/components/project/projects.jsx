import { assets, projectsData } from "@/assets/assets";
import Image from "next/image";
import React, {useRef, useState} from "react";
import { motion } from "motion/react";
import ProjectTag from "./ProjectTag";

const Projects = ({isDarkMode}) => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const onSubmit = async (event) => {
        event.preventDefault();
        };
    
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
        <div className='w-11/12 max-3xl text-center mx-auto flex flex-col items-center justify-start gap-4'>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work" className="w-full px-[12%] py-10 scroll mt-16">
            <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-5xl font-Ovo">
                All My Projects
                </motion.h2>

            <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mt-5 mb-3 font-Ovo">
                There are all my projects that I made by my self
            </motion.p>
            <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 mt-3">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
          isDarkMode={isDarkMode}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DevOps"
          isSelected={tag === "DevOps"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Networking"
          isSelected={tag === "Networking"}
        />
      </div>
      <div className="w-full flex flex-wrap-reverse md:flex-nowrap md:justify-between items-center justify-center my-2 pb-2 border-black border-b-2 dark:border-gray-600">
            <div className="w-auto flex justify-between my-4 gap-2">
                <label htmlFor="filter" className="pt-0.5">Filter teknologi:  </label>
                <select name="filter" id="" className="text-black h-8 sm:h-10 px-3 bg-white border-gray-500 border-2 rounded">
                    <option value="js">All</option>
                    <option value="js">Java Script</option>
                    <option value="ts">Typescript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                </select>
            </div>
            <form onSubmit={onSubmit} action="" method="post" className="w-auto flex items-center justify-between gap-3">
                <input type="text" name="keyword" autoFocus placeholder="masukkan keyword pencarian.." autoComplete="off"
                className="text-black h-8 sm:h-10 w-11/12 px-2 bg-white border-gray-500 border-2 rounded"/>
                <button type="submit" name="cari" className="h-8 sm:h-10 px-3 border-gray-500 border-2 rounded">Cari!</button>
            </form>
        </div>

        <div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 dark:text-black">
                {filteredProjects.map((project, index) => (
                    <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    key={index} 
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                    style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <Image src={assets.send_icon} alt="" className="w-5"/>
                            </div>
                        </div>
                    </motion.div>
                ))}
                </motion.div>
                </div>
                
            </motion.div>
        </div>
    )
}

export default Projects;