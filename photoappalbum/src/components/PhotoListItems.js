
export default function PhotoListItems({photo}){
    return(
        <div>
            <img className="h-20 w-20" src={photo.url} alt="hiiPhoto"/>
        </div>
    );
};