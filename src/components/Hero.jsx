import profilePic from '../assets/IMG_9342.webp';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
const Hero = () => {
    // Define containerVar or import it if needed
    const containerVar = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse"> 
                <div className="w-full lg:w-1/2"> 
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}  
                            alt="Caedon Ewing" 
                            className="border border-stone-900 rounded-3xl"
                            width={650}
                            height={650}
                            initial={{x:100, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{ duration: 1.1, delay: 0.5}}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVar}
                        className="flex flex-col items-center lg:items-start mt-10"
                    >
                        <motion.h2 
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Caedon Ewing
                        </motion.h2>
                            {/* Full Stack Developer Text */}
                            <motion.span 
                                variants={childVariants}
                                className='bg-gradient-to-r from-[#6d97af] to-[#A0D8FF]
                                bg-clip-text text-transparent text-2xl lg:text-4xl'>Machine Learning Developer
                            </motion.span>
                            <motion.p
                                variants={childVariants}
                                className='my-2 max-w-lg py-6 text-xl leading-relaxed
                                tracking-tighter'>{HERO_CONTENT}
                                </motion.p>
                            <motion.a 
                                variants={childVariants}
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="bg-[#6d97af] hover:bg-[#A0D8FF] text-white font-sm py-2 px-4 rounded-lg transition-colors duration-300">
                                Download Resume
                             </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
export default Hero;