import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si';
import logo from '../assets/shiba.webp'
import { FaSquareXTwitter } from 'react-icons/fa6';
const Navbar = () => {
    return(
        <nav className= "flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home"> 
                <img src={logo} className="mx-2" width={75} height={75} 
                alt="Logo"/> 
                </a>   
            </div>
            <div className= "m-4 sm:m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/caedonewing/"
                    target= "_blank"
                    rel = "noopener noreferrer"
                    aria-label = "LinkedIn">
                        <FaLinkedin className="text-blue-600 hover:text-blue-700 transition-colors" />
                    </a>
                    <a href="https://github.com/Caedone/"
                    target= "_blank"
                    rel = "noopener noreferrer"
                    aria-label = "GitHub">
                        <FaGithub className="text-gray-300 hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/nxble1/"
                    target= "_blank"
                    rel = "noopener noreferrer"
                    aria-label = "Instagram">
                        <FaInstagram className="text-pink-500 hover:text-pink-600 transition-colors" />
                    </a>
                    <a href="https://leetcode.com/u/Glow1/"
                    target= "_blank"
                    rel = "noopener noreferrer"
                    aria-label = "LeetCode">
                        <SiLeetcode className="text-orange-500 hover:text-orange-600 transition-colors" />
                    </a>
            </div>
        </nav>
    )
}

export default Navbar