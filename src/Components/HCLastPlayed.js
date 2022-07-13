import react, {useEffect, useState} from 'react'
import SongCardThird from '../Components/SongCardThird'
import axios from 'axios'

export default function HCLastPlayed () {
    
    const [song, setSong]=useState([])
    useEffect(()=>{
        const responseRC=async()=>{
            const data = await axios.get(`https://api.ragnacustoms.com/rest-api/songs?page=23`);
            setSong(data.data["hydra:member"])
            console.log(data);
        }
        responseRC()
    },[])

    return (
        <div className="maincontent-item-container">
        <h1>Last Played</h1>
        {song.slice(0,5).map((item)=>(
                        <SongCardThird 
                        AlbumArt={item.id}
                        Artist={item.authorName ||"No Artist"}
                        SongTitle={item?.name ||"No Title"}
                        Mapper={item?.levelAuthorName ||"No Mapper"}
                        Votes={item?.countVotes|| "0"}
                        Slug={item?.slug}
                    />
        ))}
    </div>
    )
}