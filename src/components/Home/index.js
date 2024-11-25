import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import About from '../About'
import Account from '../Account'
import Extra from '../Extra'
import EmployeeForm from '../EmployeeForm'
import Dashboard from '../Dashboard'
import './index.css'

const Home = () => {
    return(
        <div className = "home-con">
            <Navbar/>
            <div className = "main-con">
                <Sidebar/>
            <div className = "content-con">
            <Routes>
                <Route exact path = "/" element = {<Extra/>}/>
                <Route exact path = "/about" element = {<About/>}/>
                <Route exact path = "/account" element = {<Account/>}/>
                <Route exact path = "/employee-form" element = {<EmployeeForm/>}/>
                <Route exact path = "/project" element = {<Dashboard/>}/>
            </Routes>
            </div>
            </div>
        </div>
    )
}

export default Home