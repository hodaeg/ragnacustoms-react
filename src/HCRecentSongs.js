import react, {useEffect, useState} from 'react'
import SongCardThird from './SongCardThird'
import axios from 'axios'

export default function HCRecentSongs () {
    
    const [song, setSong]=useState([])
    useEffect(()=>{
        const responseRC=async()=>{
            const data = await axios.get(`https://api.ragnacustoms.com/rest-api/songs?page=31`);
            setSong(data.data["hydra:member"])
            console.log(data);
        }
        responseRC()
    },[])

    return (
        <div className="maincontent-item-container">
        <h1>Recent Songs</h1>
        {song.map((item)=>(
                        <SongCardThird 
                        AlbumArt={item.id}
                        Artist={item.authorName ||"No Artist"}
                        SongTitle={item?.name ||"No Title"}
                        Mapper={item?.levelAuthorName ||"No Mapper"}
                        Votes={item?.countVotes ||"0"}
                    />
        ))}
    </div>
    )
}