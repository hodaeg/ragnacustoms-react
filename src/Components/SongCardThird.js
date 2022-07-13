import react, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function SongCardThird (props) {
    const {Artist, deleteSong, Mapper, Votes, Slug, SongTitle, AlbumArt, id}=props
    
    const [voteCast, setVoteCast] = useState(Votes);
    console.log(Votes, voteCast);
    useEffect(()=>{
        setVoteCast(Votes);
    },[])

    function handleClickUp() {
        setVoteCast(voteCast + 1)
    }
    
    function handleClickDown() {
        setVoteCast(voteCast - 1)
    }

    const AlbumArtID = AlbumArt;
    const AlbumArtLink = `https://ragnacustoms.com/covers/${AlbumArtID}.jpg`;

    return (
        <div className="song-card-third" onClick={()=>deleteSong(id)} onMouseEnter={()=>{console.log({props})}}>
                <img src={AlbumArtLink} onError={(e)=>{ if (e.target.src !=={AlbumArtLink}) 
                { e.target.onerror = null; e.target.src="https://ragnacustoms.com/apps/logo.png"; } }}  />
                <div className="songInfo">
                    <p className="songInfoSong"><Link to={`song/${Slug}`}>{SongTitle}</Link></p>
                    <p className="songInfoArtist">{Artist}</p>
                    <p className="songInfoMapper">{Mapper}</p>
                </div>
                    <div className="difficultyContainer">
                        <div className="difficultyDot">3</div>
                        <div className="difficultyDot" id="medium">7</div>
                        <div className="difficultyDot" id="hard">10</div>
                    </div>
                <div className="vote">
                    <i class="fa-solid fa-chevron-up" onClick={handleClickUp}></i>
                    <span>{voteCast}</span>
                    <i class="fa-solid fa-chevron-down" onClick={handleClickDown}></i>
                </div>
        </div>
    )
} 