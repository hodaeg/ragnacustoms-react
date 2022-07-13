import react, {useEffect, useState} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import SongCardCreated from './Components/SongCardCreated';


export default function SubmitSong () {
    const API="https://o4tscq4tpb.execute-api.us-east-2.amazonaws.com/dev/songs"
    const {songname}=useParams();
    console.log({songname});
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => postSong(data);
    console.log(errors);
    
    const [songs, setSongs] = useState([]);

    async function getPostedSongs() {
        const res=await axios.get(API);
        console.log(res);
        setSongs([...res.data]);
    }

    async function getPostedSong() {
        const song=await axios.get(`${API}/c0508dca-c1a8-4f28-bbc7-da07e0d9c4cb`);
    }

    async function postSong(data) {
        const id=uuidv4();
        const song=await axios.post(API, {
                id: id,
                ...data
            }
        )
        setSongs((prev)=>{
            return [
                ...prev,
                {
                    id:id, 
                    ...data
                }
            ]
        })
        console.log(song);
        reset();
    }

    async function putSong() {
        const song=await axios.put(`${API}`, {
            id: 'c0508dca-c1a8-4f28-bbc7-da07e0d9c4cb',
            artistTitle: "Lateralus-Changed",
            difficulty:"Eznotsoez" ,
            genre: "MetalKinda",
            songName: "Tools",
        })
        console.log(song);
    }

    async function deleteSong(id) {
        const song=await axios.delete(`${API}/${id}`);
        console.log(song);
        setSongs((prev)=>{
            const newState=prev.filter((item)=>item.id!==id);
            return [...newState];
        });
    }

    useEffect(()=>{
        getPostedSongs();
    },[])

    return (
        <>
        <div className='ssContainer'>
            <div className='ssForm'>
                    <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
                        <h1>Submit Created Song</h1>
                        <p>Artist Name</p>
                        <input type="text" placeholder="Enter Artist's Name" {...register("artistTitle", {required: true, maxLength: 20})} />
                        <p>Song Title</p>
                        <input type="text" placeholder="Enter Song Name" {...register("songName", {required: true, maxLength: 30})} />
                        <p>Genre</p>
                        <input type="text" placeholder="Enter Genre Type" {...register("genre", {required: true, maxLength: 15})} />
                        <p>Difficulty</p>
                        <select {...register("1-10", { required: true })}>
                            <option value="Easy 1">Easy 1</option>
                            <option value="Easy 2">Easy 2</option>
                            <option value="Easy 3">Easy 3</option>
                            <option value="Medium 4">Medium 4</option>
                            <option value="Medium 5">Medium 5</option>
                            <option value="Medium 6">Medium 6</option>
                            <option value="Medium 7">Medium 7</option>
                            <option value="Hard 8">Hard 8</option>
                            <option value="Hard 9">Hard 9</option>
                            <option value="Hard 10">Hard 10</option>
                        </select>
                        <p>BPM</p>
                        <input type="number" placeholder="Max 250 bpm" {...register("bpm", {required: true, max: 250, min: 50})} />
                        <p>Song Length</p>
                        <input type="text" placeholder="00:00" {...register("songLength", {required: true, maxLength:5})} />
                        <p>Description</p>
                        <input type="text" placeholder="Enter Description" {...register("description", { maxLength: 400})} />
                        <button className="button" id="submit" type="submit">Submit Song</button>
                    </form>
            </div>
            <div className='ssCardList'>
                {songs.map((item)=>(
                    <SongCardCreated
                    id={item.id}
                    deleteSong={deleteSong}
                    Artist={item.artistTitle ||"No Artist"}
                    SongTitle={item?.songName ||"No Title"}
                    BPM={item?.bpm || "0"}
                    Genre={item.genre}
                    Length={item.songLength}
                    Desc={item.description}
                    Difficulty={item.difficulty}
                    />
                ))}
            </div>
        </div>
        </>
    )
}