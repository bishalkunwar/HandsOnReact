
export default function SearchBar({onSubmit}){
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("I need to tell something to my parent");
        onSubmit("cars");
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
};