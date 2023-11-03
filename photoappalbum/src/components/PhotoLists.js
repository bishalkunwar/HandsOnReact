// import PhotoListItems from "./PhotoListItems";
import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotoListItems from "./PhotoListItems";

export default function PhotoLists({album}){
    const {data, isFetching, error} = useFetchPhotosQuery(album);
    const[addPhoto, addPhotoResults] = useAddPhotosMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if(isFetching){
        content = <Skeleton className="h-8 w-8" times={4}/>
    }else if(error){
        content = <div>Error fetching photos...</div>
    }else{
        content = data.map(photo=>{
            return<PhotoListItems key={photo.id} photo={photo}/>
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos On {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>+Add Photo</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};