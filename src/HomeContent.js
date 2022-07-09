import react from 'react'
import HCTopSongs from './HCTopSongs'
import HCRecentSongs from './HCRecentSongs'
import HCLastPlayed from './HCLastPlayed'

export default function HomeContent () {
    return (
        <div className="maincontent-container-rc">
           <HCTopSongs />
           <HCRecentSongs />
           <HCLastPlayed />
        </div>
    )
}