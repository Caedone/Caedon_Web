import { EXPERIENCES } from "../constants";
import{ motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{duration: 0.5}}
                className="my-20 text-center text-4xl text-white">Experience

            </motion.h2>
            <div>   
                {EXPERIENCES.map((experience, index) => (
                    <motion.div key = {index} className="mb-8 flex flex-wrap lg:justify-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}>
                        <motion.div className="w-full lg:w-1/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}>
                            <p className="mb-2 text-sm text-gray-400">{experience.year}</p>
                        </motion.div>
                        <motion.div className="w-full max-w-xl lg:w-3/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}>
                            <h3 className='mb-2 font-semibold text-2xl text-white'>
                                {experience.role}
                                <span className="text-sm text-gray-400">
                                 - {experience.company}</span>
                            </h3>
                            <ul className="mb-4 list-disc list-inside space-y-2">
                                {experience.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="text-gray-300 text-sm leading-relaxed">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            {experience.technologies.map((tech, index) => (
                                <span className="mr-2 rounded bg-gray-800 p-2 text-sm font-medium text-white" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                     </motion.div>
                ))}
            </div>

        </div>
    )
}
export default Experience;