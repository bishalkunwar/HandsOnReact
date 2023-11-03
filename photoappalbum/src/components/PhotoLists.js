// import PhotoListItems from "./PhotoListItems";
import { useFetchPhotosQuery } from "../store";

export default function PhotoLists({album}){
    useFetchPhotosQuery(album);
    return (
        "hello"
    );
};