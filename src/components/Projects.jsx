import { PROJECTS } from '../constants'
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaJava, FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPytorch, SiCplusplus, SiDotnet, SiOpencv, SiTypescript, SiMysql, SiScikitlearn, SiOpenai } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Projects = () => {
    // Technology icon mapping
    const techIcons = {
        "Python": { icon: FaPython, color: "text-blue-500" },
        "PyTorch": { icon: SiPytorch, color: "text-orange-600" },
        "Java": { icon: FaJava, color: "text-red-600" },
        "JavaScript": { icon: IoLogoJavascript, color: "text-yellow-500" },
        "React": { icon: FaReact, color: "text-cyan-400" },
        "C++": { icon: SiCplusplus, color: "text-blue-600" },
        "C#": { icon: TbBrandCSharp, color: "text-purple-600" },
        ".NET API": { icon: SiDotnet, color: "text-purple-500" },
        ".NET Framework": { icon: SiDotnet, color: "text-purple-500" },
        "OpenCV": { icon: SiOpencv, color: "text-green-500" },
        "TypeScript": { icon: SiTypescript, color: "text-blue-400" },
        "SQL": { icon: SiMysql, color: "text-blue-600" },
        "JDBC": { icon: FaDatabase, color: "text-orange-500" },
        "Scikit-learn": { icon: SiScikitlearn, color: "text-orange-400" },
        "GPT": { icon: SiOpenai, color: "text-green-400" },
    };

    const getTechIcon = (techName) => {
        return techIcons[techName] || null;
    };

    const iconVariants = (duration) => ({
        initial: { rotate: 0 },
        animate: {
            rotate: [-10, 10],
            transition: {
                duration: duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="py-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-center text-5xl font-bold text-white"
            >
                Featured Projects
            </motion.h2>
            <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-base text-gray-400 mb-16"
            >
                Click on any project to view the code or live demo
            </motion.p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden bg-gray-700">
                            {project.liveDemo ? (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                                    {/* Live Demo Badge */}
                                    <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        LIVE DEMO
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                                        <div className="flex flex-col items-center gap-2">
                                            <FaExternalLinkAlt className="text-white text-5xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-2xl pointer-events-none" />
                                            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                Click to view demo
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div
                                    className="block h-full w-full cursor-pointer"
                                    onClick={() => window.open(project.github, '_blank')}
                                >
                                    {/* View Code Badge */}
                                    <div className="absolute top-3 right-3 z-10 bg-gray-700 text-gray-300 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-gray-600 pointer-events-none">
                                        <FaGithub className="text-sm" />
                                        VIEW CODE
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                                        <div className="flex flex-col items-center gap-2">
                                            <FaGithub className="text-white text-5xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-2xl pointer-events-none" />
                                            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                View on GitHub
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Content Container */}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-3 items-center justify-start mt-2">
                                {project.technologies && project.technologies.map((tech, techIndex) => {
                                    const techInfo = getTechIcon(tech);
                                    if (techInfo && techInfo.icon) {
                                        const IconComponent = techInfo.icon;
                                        return (
                                            <motion.div
                                                key={techIndex}
                                                initial="initial"
                                                animate="animate"
                                                variants={iconVariants(2 + techIndex * 0.5)}
                                                className="flex items-center gap-1"
                                                title={tech}
                                            >
                                                <IconComponent className={`text-3xl ${techInfo.color}`} />
                                            </motion.div>
                                        );
                                    }
                                    return (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-700 to-transparent opacity-20 rounded-bl-full"></div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;