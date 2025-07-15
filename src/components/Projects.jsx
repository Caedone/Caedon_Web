import { PROJECTS } from '../constants'
import { motion } from 'framer-motion';
const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            
            className="my-20 text-center text-4xl">Projects
            </motion.h2>
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
                            className="w-full lg:w-1/4">
                            <img src={project.image}
                            width={250}
                            height={250}
                            alt={project.title}
                            className="mb-6 rounded shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
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