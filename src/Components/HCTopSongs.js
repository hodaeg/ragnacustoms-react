import react, {useEffect, useState} from 'react'
import SongCardThird from '../Components/SongCardThird'
import axios from 'axios'

export default function HCTopSongs () {
    
    const [song, setSong]=useState([])
    useEffect(()=>{
            const responseRC=async()=>{
            const data = await axios.get(`https://api.ragnacustoms.com/rest-api/songs?page=15`);
            setSong(data.data["hydra:member"]);
        }
        responseRC()
    },[])
    
    return (
        <div className="maincontent-item-container">
            <h1>Top Rated</h1>
            {song.slice(0,5).map((item)=>(
                            <SongCardThird 
                            AlbumArt={item.id}
                            Artist={item.authorName ||"No Artist"}
                            SongTitle={item?.name ||"No Title"}
                            Mapper={item?.levelAuthorName ||"No Mapper"}
                            Votes={item?.countVotes || "0"}
                            Slug={item?.slug}
                        />
            ))}
        </div>
    )
}