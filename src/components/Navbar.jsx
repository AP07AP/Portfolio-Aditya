import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagram} from "react-icons/fa"
const Navbar = () => {
    return(
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <p className="text-1xl font-bold text-cyan-400 bg-clip-text bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 transition-colors duration-300">
        Aditya Prakash</p>
        </div>
        <div className="m-8 flex items-center justify-between gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare />
            <FaInstagram />
        </div>
    </nav>
    )
}

export default Navbar