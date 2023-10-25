import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store/index";
import { useState } from "react";

export default function SongsLists(){

    const[song, setSong] = useState('');
    const dispatch = useDispatch();
    const songsPlayList = useSelector((state)=>{
        return state.songs;
    })

    const handleAddSong = (song) => {
        dispatch(addSong(song));
    };

    const handleRemoveSong = (song) => {
        dispatch(removeSong(song));
    }

    const renderedSongs = songsPlayList.map((song)=>{
        return(
            <li key={song}>
                {song}
                <button onClick={() => handleRemoveSong(song)}>X</button>
            </li>
        )
    }) 

    const handleChange = (e) => {
        setSong(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddSong(song);
        setSong('');
    };

    return(
        <div>
            <p>Add a Song</p>
            <hr/>
                <form onSubmit={handleSubmit}>
                    <label>Add Song <input className="bg-gray-200 " value={song} onChange={handleChange}/></label>
                    <button type="submit">Add</button>
                </form>
            <hr/>
            {renderedSongs}
        </div>
    );
};