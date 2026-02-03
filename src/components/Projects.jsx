import { PROJECTS } from '../constants'
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}

            className="my-20 text-center text-4xl text-white">Projects
            </motion.h2>
            <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-sm text-gray-400 mb-8 -mt-16"
            >
                Click on project images to view the code or live demo
            </motion.p>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div key={index} className="mb-8 flex flex-wrap 
                        lg:justify-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                            {project.liveDemo ? (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer mb-6 w-[250px] h-[250px] block">
                                    <img
                                        src={project.image}
                                        width={2560}
                                        height={250}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded shadow-lg transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-black bg-opacity-30 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <FaExternalLinkAlt className="text-white text-4xl drop-shadow-lg" />
                                    </div>
                                </a>
                            ) : (
                                <div
                                    className="relative group cursor-pointer mb-6 w-[250px] h-[250px]"
                                    onClick={() => window.open(project.github, '_blank')}
                                >
                                    <img
                                        src={project.image}
                                        width={2560}
                                        height={250}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded shadow-lg transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-black bg-opacity-30 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <FaGithub className="text-white text-4xl drop-shadow-lg" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h3 className='mb-2 font-semibold text-2xl text-white'>{project.title}</h3>
                            <p className='mb-4 text-gray-300'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span className="mr-2 rounded bg-gray-800 p-2 text-sm font-medium text-white" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;