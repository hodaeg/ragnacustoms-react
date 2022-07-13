import react from 'react'
import HCTopSongs from '../Components/HCTopSongs'
import HCRecentSongs from '../Components/HCRecentSongs'
import HCLastPlayed from '../Components/HCLastPlayed'

export default function HomeContent () {
    return (
        <div className="maincontent-container-rc">
           <HCTopSongs />
           <HCRecentSongs />
           <HCLastPlayed />
        </div>
    )
}