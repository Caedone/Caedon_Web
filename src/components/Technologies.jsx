import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import {motion} from "framer-motion";

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
})

const Technologies = () => {
    return ( 
        <div className="pb-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial = {{ opacity: 0, y: -100 }}
                transition={{duration: 0.9}}
                className="my-20 text-center text-4xl text-primary">Technologies
            </motion.h2>
            
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial = {{ opacity: 0, y: -100 }}
                transition={{duration: 1.1}}
                className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        intial="intial"
                        animate="animate"
                        variants={iconVariants(2.5)}>
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </motion.div>
                    <motion.div
                        intial="intial"
                        animate="animate"
                        variants={iconVariants(3)}
                        className = "p-4">
                        <TbBrandNextjs className="text-7xl" />
                    </motion.div>
                    <motion.div 
                    
                        intial="intial"
                        animate="animate"
                        variants={iconVariants(5)}
                        className="p-4">
                        <SiMongodb className="text-7xl text-cyan-500"/> 
                    </motion.div>
                    <motion.div 
                        
                        intial="intial"
                        animate="animate"
                        variants={iconVariants(2)}
                        className="p-4">
                        <DiRedis className="text-7xl text-red-700" />
                    </motion.div>
                    <motion.div 

                        intial="intial"
                        animate="animate"
                        variants={iconVariants(6)}
                        
                        className="p-4">
                        <FaNodeJs className="text-7xl text-green-500" /> 
                    </motion.div>
                    <motion.div 
                        
                        intial="intial"
                        animate="animate"
                        variants={iconVariants(4)}

                        className="p-4">
                        <BiLogoPostgresql className="text-7xl text-sky-700" /> 
                    </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies;