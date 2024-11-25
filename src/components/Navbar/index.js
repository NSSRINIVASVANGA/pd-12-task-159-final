import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './index.css'

const Navbar = () => {
    return(
        <>
        <nav className = "nav-con">
            <div className = "nav-part-1">
                <a href = "#project"> Dashboard </a>
            </div>
            <div className = "nav-part-2">
                <a href = "#fb"><FaFacebook/></a>
                <a href = "#twitter"><FaSquareXTwitter/></a>
                <a href = "#linkedin"><FaLinkedin/></a>
                <a href = "#insta"><FaInstagram/></a>
            </div>
        </nav>
        </>
    )
}

export default Navbar