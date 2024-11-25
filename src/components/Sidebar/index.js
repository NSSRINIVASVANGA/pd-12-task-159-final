// import {Link} from 'react-router-dom'
// import './index.css'

// const Sidebar = () => {
//     return(
//         <>
//         <ul className = "sidebar-con">
//             <Link to = "/"><li>Home</li></Link>
//             <Link to = "/account">Account</Link>
//             <Link to = "/about">About</Link>
//             <Link to = "/project">Project</Link>
//         </ul>
//         </>
//     )
// }

// export default Sidebar

import { FaHome,FaRegUser } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { GrFormSchedule } from "react-icons/gr";
import { Link } from 'react-router-dom';
import './index.css'


const Sidebar = () => {
    return(
        <ul className = "list-con">
            <Link to = "/" className = "link-item"><li className="list-item"> <FaHome /> Home </li></Link>
            <Link to = "/Account" className = "link-item"><li className = "list-item"> <FaRegUser /> Account </li></Link>
            <Link to = "/employee-form" className = "link-item"><li className = "list-item"> <GrFormSchedule /> Employee Form </li></Link>
            <Link to = "/Project" className = "link-item"><li className = "list-item"> <AiOutlineStock/> Employee Performance </li></Link>
            <Link to = "/about" className = "link-item"><li className = "list-item"> <CiCircleQuestion/> About </li></Link>
        </ul>
    )
}

export default Sidebar