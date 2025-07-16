import Caedon1 from '../assets/Caedon1.webp';
import Caedon2 from '../assets/Caedon2.webp';
import Caedon3 from '../assets/Caedon3.webp';
import resume from '../assets/resume.pdf';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const Hero = () => {
    const profileImages = [Caedon1, Caedon2, Caedon3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
        }, 7000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [profileImages.length]);

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
                        <div className="relative w-[650px] h-[650px]">
                            {profileImages.map((image, index) => (
                                <motion.img
                                    key={index}
                                    src={image}  
                                    alt="Caedon Ewing" 
                                    className="border border-gray-600 rounded-3xl absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                                    initial={{x:100, opacity:0}}
                                    animate={{
                                        x: 0,
                                        opacity: index === currentImageIndex ? 1 : 0,
                                        rotateY: index === currentImageIndex ? 0 : 90,
                                        scale: index === currentImageIndex ? 1 : 0.8
                                    }}
                                    transition={{ 
                                        duration: 1.1, 
                                        delay: 0.5,
                                        opacity: { duration: 0.8 },
                                        rotateY: { duration: 0.8 },
                                        scale: { duration: 0.8 }
                                    }}
                                    onClick={() => window.open('https://github.com/Caedone/', '_blank')}
                                />
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVar}
                        className="flex flex-col items-center lg:items-start mt-6 lg:mt-10"
                    >
                        <motion.h2 
                            variants={childVariants}
                            className='pb-4 text-2xl sm:text-3xl tracking-tighter lg:text-7xl text-white text-center lg:text-left font-bold whitespace-nowrap'>Caedon Ewing
                        </motion.h2>
                            
                            <motion.span 
                                variants={childVariants}
                                className='bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600
                                bg-clip-text text-transparent text-xl sm:text-2xl lg:text-4xl text-center lg:text-left font-semibold mb-6'>Software Developer
                            </motion.span>
                            
                            <motion.p
                                variants={childVariants}
                                className='my-8 max-w-lg text-lg sm:text-xl leading-relaxed
                                tracking-normal text-gray-300 text-center lg:text-left'>{HERO_CONTENT}
                                </motion.p>
                            
                            <motion.a 
                                variants={childVariants}
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-4">
                                Download Resume ⬇️
                             </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
export default Hero;