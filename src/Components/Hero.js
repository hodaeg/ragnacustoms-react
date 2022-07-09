import react from 'react'
import headerimg from './rcheader.jpg'

export default function Hero () {
    return (
        <div class="hero-rc">
            <div class="hero-search-rc">
                <h1>Search Over 897 Custom Songs For Ragnarock VR On Steam And Meta Quest</h1>
                <div className="searchBar">
                    <input class="search" placeholder="Search songs"></input>
                    <button className="searchButton">Search</button>
                </div>
            </div>
        </div>
    )
}