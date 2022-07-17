import react from 'react'
import rclogo from '../rclogo.png'
import { Link } from 'react-router-dom'
import { hamburger } from '../bars-solid.svg'

export default function Header () {
    return (
        <nav>
            <div className="nav-rc">
                <Link to ="/"><img src={rclogo} className="logo"/></Link>
                <img src ={hamburger}></img>
                <div className="nav-items-container">
                    <ul className="nav-items">
                        <button><Link to ="/submitsong">Submit Song</Link></button>
                        <li><Link to ="/songlibrary">Song Library</Link></li>
                        <li>Leaderboard</li>
                        <li>Mappers</li>
                        <li>Apps</li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
