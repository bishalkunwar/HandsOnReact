import './SearchBar.css';
import {useState} from 'react';

export default function SearchBar({onSubmit}){
    
    const[term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("I need to tell something to my parent");
        onSubmit({term});
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return(
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Search For Some Images</label>
                <input value={term} onChange={handleChange}/><br/>
                {term}<br/>
                {term.length <= 3 && 'Input length looks too low'}
            </form>
        </div>
    );
};