import "./Main.css";

import {useState} from 'react';
import ShowAnimals from './ShowAnimals';

function getRandonAnimal(){
    const animals = ["bird", "cat", "cow", "dog", "horse"];

    return animals[Math.floor(Math.random()*animals.length)];
}

export default function Main(){

    const[animals, setAnimals] = useState([]);

    const handleClick = ()=>{
        setAnimals([...animals, getRandonAnimal()]);
    }

    const renderAnimals = animals.map((animal, index)=>{
        return(<ShowAnimals type={animal} key={index}/>)
    })

    return(
        <div className="main">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">Animals: {renderAnimals}</div>
        </div>
    );
};






















// // import 'bulma/css/bulma.css';
// export default function Main(){
//     return(
//         <div>
//             <div className="container">
//                 <section className="section">
//                     <div className="columns">
//                         <div className="column is-4">
//                             <ProfileCard image="https://i.imgur.com/xRxg8BPb.jpg" title="Google Alexa" handle="@bishal" description="This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image."/>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             <div className="container">
//                 <section className="section">
//                     <div className="columns">
//                         <div className="column is-4">
//                             <ProfileCard image="https://i.imgur.com/xRxg8BPb.jpg" title="Google Alexa" handle="@bishal" description="This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image."/>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             <div className="container">
//                 <section className="section">
//                     <div className="columns">
//                         <div className="column is-4">
//                             <ProfileCard image="https://i.imgur.com/xRxg8BPb.jpg" title="Google Alexa" handle="@bishal" description="This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image."/>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
        
            
//     );
// };

// // style={{display:"flex", flexDirection:"row", alignItems:"center", margin: "0px auto", padding: "20px 20px 20px 20px"}}

// // function Contents(props){
// //     const {image, title, desc} = props;
// //     return(
// //         <div className="main-container" style={{border:"1px solid black", display: "flex", flexWrap: "wrap", flexDirection: "column", textAlign: "center"}}>
// //             <img src={image} alt="img" />
// //             <h1>{title}</h1>
// //             <p>{desc}</p>
// //     </div>
// //     );
// // };


// function ProfileCard({image, media, title, handle, description}){

//     return(
//         <div className="card">
//             <div className="card-image">
//                 <figure className="image is-1by1">
//                     <img src={image} alt="Main Image1"/>  
//                 </figure>
//             </div>
//             <div className="card-content">
//                 <div className="media-content">
//                    <p className="title is-4">{title}</p>
//                    <p className="title is-6">{handle}</p>
//                 </div>   
//             </div>
//             <div className="content">
//                 <p>{description}</p>
//             </div>
//         </div> 

//     );
// };

//         // <div>
//         //     <p>{image}</p>
//         //     <p>{media}</p>
//         //     <p>{title}</p>
//         //     <p>{handle}</p>
//         //     <p>{description}</p>
//         // </div>


