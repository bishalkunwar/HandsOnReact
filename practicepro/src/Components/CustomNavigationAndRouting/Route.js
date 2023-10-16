
import useNavigation from "../hooks/useNavigation";
// import { useContext } from "react";
// import NavigationContext from "../../context/navigationContext";

export default function Route({path, children}){
    const {currentPath} = useNavigation(); 

    if(path ===  currentPath){
        return children;
    }

    return null;
};