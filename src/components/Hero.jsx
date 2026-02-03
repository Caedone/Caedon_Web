import Caedon1 from '../assets/Caedon1.webp';
import Caedon2 from '../assets/Caedon2.webp';
import Caedon3 from '../assets/Caedon3.webp';
import resume from '../assets/resume.pdf';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
    const profileImages = [Caedon1, Caedon2, Caedon3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [profileImages.length]);

    const containerVar = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pb-8 pt-10 lg:pt-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVar}
                className="flex flex-col items-center text-center"
            >
                {/* Profile Image Carousel */}
                <motion.div
                    variants={childVariants}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mb-8"
                >
                    {profileImages.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt="Caedon Ewing"
                            className="border-4 border-gray-600 rounded-full absolute top-0 left-0 w-full h-full object-cover cursor-pointer shadow-2xl"
                            animate={{
                                opacity: index === currentImageIndex ? 1 : 0,
                                scale: index === currentImageIndex ? 1 : 0.8
                            }}
                            transition={{
                                duration: 0.8,
                                opacity: { duration: 0.6 },
                                scale: { duration: 0.6 }
                            }}
                            onClick={() => window.open('https://github.com/Caedone/', '_blank')}
                        />
                    ))}
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={childVariants}
                    className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold mb-4"
                >
                    Caedon Ewing
                </motion.h1>

                {/* Title */}
                <motion.p
                    variants={childVariants}
                    className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6"
                >
                    Software Developer
                </motion.p>

                {/* Tagline */}
                <motion.p
                    variants={childVariants}
                    className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-8"
                >
                 Java | React | Python | C#
                </motion.p>

                {/* Resume Button */}
                <motion.a
                    variants={childVariants}
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Caedon_Ewing_Software_Engineer.pdf"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    Download Resume
                </motion.a>
            </motion.div>
        </div>
    );
}
export default Hero;