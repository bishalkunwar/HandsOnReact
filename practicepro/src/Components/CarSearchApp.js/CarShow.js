
export default function CarShow({image}){
    
    return(
        <div key={image._id}>
            <img src={image.urls.small} alt={image._description}/>
        </div>
    );
};