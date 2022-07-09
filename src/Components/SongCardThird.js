import react, {useState} from 'react'
import atbart from './OIP.jpg'

export default function SongCardThird (props) {
    
    const [voteCast, setVoteCast] = useState("null");
    
    function handleClickUp() {
        setVoteCast(props.Votes + "1")
    }
    
    // Random Cover Art Generator (not needed)
    /*const artUrl = function randomNumber() {
        const srcNum = Math.floor(Math.random() * (900 - 1) + 1);
        const coverSrc = (srcNum.toString());
        const artUrl = "https://ragnacustoms.com/covers/" + coverSrc + ".jpg";
        return artUrl;
    }*/
    

    const AlbumArt = props.AlbumArt;
    const AlbumArtLink = `https://ragnacustoms.com/covers/` + AlbumArt + `.jpg`;

    return (
        <div className="song-card-third">
                <img src={AlbumArtLink} onError={(e)=>{ if (e.target.src !=={AlbumArtLink}) 
                { e.target.onerror = null; e.target.src="https://ragnacustoms.com/apps/logo.png"; } }}  />
                <div className="songInfo">
                    <p className="songInfoSong">{props.SongTitle}</p>
                    <p className="songInfoArtist">{props.Artist}</p>
                    <p className="songInfoMapper">{props.Mapper}</p>
                </div>
                    <div className="difficultyContainer">
                        <div className="difficultyDot">3</div>
                        <div className="difficultyDot" id="medium">7</div>
                        <div className="difficultyDot" id="hard">10</div>
                    </div>
                <div className="vote">
                    <i class="fa-solid fa-chevron-up" onClick={handleClickUp}></i>
                    <span>{props.Votes}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
        </div>
    )
} 