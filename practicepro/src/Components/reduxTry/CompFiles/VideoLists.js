import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store/index";
import { useState } from "react";

export default function MoviesLists(){

    const[movie, setMovie] = useState('');
    const dispatch = useDispatch();

    const moviesPlayList = useSelector((state)=>{
        return state.movies;
    })

    const handleAddMovie = (movie) => {
        dispatch(addMovie(movie));
    };

    const handleRemoveMovie = (movie) => {
        dispatch(removeMovie(movie));
    }

    const renderedmovies = moviesPlayList.map((movie)=>{
        return(
            <li key={movie}>
                {movie}
                <button onClick={() => handleRemoveMovie(movie)}>X</button>
            </li>
        )
    }) 

    const handleChange = (e) => {
        setMovie(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddMovie(movie);
        setMovie('');
    };

    return(
        <div>
            <p>Add a movie</p>
            <hr/>
                <form onSubmit={handleSubmit}>
                    <label>Add movie <input className="bg-gray-200 " value={movie} onChange={handleChange}/></label>
                    <button type="submit">Add</button>
                </form>
            <hr/>
            {renderedmovies}
        </div>
    );
};