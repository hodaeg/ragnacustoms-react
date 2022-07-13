import react, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './SongCardCreated.css';

export default function SongCardCreated (props) {
    const {deleteSong, Artist, SongTitle, BPM, Genre, Length, Desc, Difficulty, id}=props
    

    //const AlbumArtID = AlbumArt;
    //const AlbumArtLink = `https://ragnacustoms.com/covers/${AlbumArtID}.jpg`;

    return (
        <div class="song-card-createdcontainer">
            <div class="song-card-created">
                <div class="song-card-created-covercontainer">
                <div class="song-card-created-covertextcontainer">
                    <div class="song-card-created-covertext">
                    <h1>{SongTitle}</h1>
                    <p>{Artist}</p>
                    </div>
                    <div class="genreChip">
                    <p>{Genre}</p>
                    </div>
                </div>
                </div>
                <div class="songcard-created-infocontainer">
                <p><strong>Difficulty: </strong>{Difficulty}</p>
                <p><strong>BPM: </strong>{BPM}</p>
                <p><strong>{Length}</strong></p>
                </div>
                <div class="descriptionContainer">
                <p>{Desc}</p>
                </div>
            </div>
            <div class="song-card-created-buttonscontainer">
                <button onClick={()=>deleteSong(id)}><i class="fa-solid fa-trash-can"></i> Delete</button>
            </div>
        </div>
    )
} 