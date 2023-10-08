import './ImageList.css';
import CarShow from "./CarShow";

export default function CarLists({data}){
    
    const renderedImage = data.map((image)=>{
        return <CarShow image={image}/>
    });

    return(
        <div className="image-list">{renderedImage}</div>
    );
};