import {useState} from 'react';
import SearchBar from "./Components/CarSearchApp.js/SearchBar";
import searchImages from "./api";
import CarLists from "./Components/CarSearchApp.js/CarList";

function App() {
  
  const[images, setImages] = useState([]);

  const handleSubmit=async(term)=>{
    const responded = await searchImages(term);
    setImages(responded);
  };

  return (
    <div className="App">
        <SearchBar onSubmit={handleSubmit} />
        <CarLists data = {images}/>
    </div>
  );
}

export default App;
