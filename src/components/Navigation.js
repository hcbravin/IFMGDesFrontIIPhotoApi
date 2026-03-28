import { NavLink } from "react-router-dom"

function Navigation(){
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/island">Island</NavLink></li>
                <li><NavLink to="/archtecture">Archtecture</NavLink></li>
                <li><NavLink to="/coding">Coding</NavLink></li>
                <li><NavLink to="/coffee<">Coffee</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation