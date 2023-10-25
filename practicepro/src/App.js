// import Home from "./Components/Pages/Home";
// <Home/>

// import ReduxHome from "./Components/reduxTry/ReduxHome";
import SongsLists from "./Components/reduxTry/CompFiles/Songslis";
import MoviesLists from "./Components/reduxTry/CompFiles/VideoLists";
import { useDispatch } from "react-redux";
import { resetMovie, resetSong } from "./Components/reduxTry/store/index";

function App(){

  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(resetMovie());
    dispatch(resetSong());
  }

  return(
    <div>
      <SongsLists/>
      <hr/>
      <MoviesLists/>
      <br/><br/>
      <button onClick={handleResetClick}>
        Reset Both 
      </button>
    </div>
    
  );
};

export default App;










// import {useState} from 'react';
// import SearchBar from "./Components/CarSearchApp.js/SearchBar";
// import searchImages from "./api";
// import CarLists from "./Components/CarSearchApp.js/CarList";

// function App() {
  
//   const[images, setImages] = useState([]);

//   const handleSubmit=async(term)=>{
//     const responded = await searchImages(term);
//     setImages(responded);
//   };

//   return (
//     <div className="App">
//         <SearchBar onSubmit={handleSubmit} />
//         <CarLists data = {images}/>
//     </div>
//   );
// }

// export default App;
