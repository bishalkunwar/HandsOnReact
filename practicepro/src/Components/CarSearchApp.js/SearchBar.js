
export default function SearchBar({onSubmit}){
    
    const handleClick = () => {
        onSubmit('cars');
    }

    return(
        <div>
            <input /><br/>
            <button onClick={handleClick}>
                Search
            </button>
        </div>
    );
};