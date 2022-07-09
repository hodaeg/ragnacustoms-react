import react from 'react'
import rclogo from './rclogo.png'

export default function Header () {
    return (
        <nav>
            <div className="nav-rc">
            <img src={rclogo} className="logo" />
                <div className="nav-items-container">
                    <ul className="nav-items">
                        <li>Getting Started</li>
                        <li>Song Library</li>
                        <li>Leaderboard</li>
                        <li>Mappers</li>
                        <li>Apps</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
