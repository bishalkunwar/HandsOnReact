// import Main from "./Components/ReusableCompTry/Main";
import SearchBar from "./Components/CarSearchApp.js/SearchBar";

function App() {
  
  const handleSubmit=(term)=>{
    console.log("Do search me", term);
    //onsubmit();
  };

  return (
    <div className="App">
        {/* <Main/>     */}
        <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
