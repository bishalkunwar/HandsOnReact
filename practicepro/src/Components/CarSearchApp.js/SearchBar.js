import {useState} from 'react';

export default function SearchBar({onSubmit}){
    
    const[term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("I need to tell something to my parent");
        onSubmit("cars");
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
};