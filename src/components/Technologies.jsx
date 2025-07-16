import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPytorch, SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
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
                className="my-20 text-center text-4xl text-white">Technologies
            </motion.h2>
            
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial = {{ opacity: 0, y: -100 }}
                transition={{duration: 1.1}}
                className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        className="p-4">
                        <FaJava className="text-7xl text-red-600" />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(3)}
                        className="p-4">
                        <IoLogoJavascript className="text-7xl text-yellow-500" />
                    </motion.div>
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(5)}
                        className="p-4">
                        <FaPython className="text-7xl text-blue-500"/> 
                    </motion.div>
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        className="p-4">
                        <SiPytorch className="text-7xl text-orange-600" />
                    </motion.div>
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(6)}
                        className="p-4">
                        <SiCplusplus className="text-7xl text-blue-600" /> 
                    </motion.div>
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(3.5)}
                        className="p-4">
                        <FaReact className="text-7xl text-cyan-400" /> 
                    </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies;