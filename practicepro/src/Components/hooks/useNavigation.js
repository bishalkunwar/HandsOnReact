import { useContext } from "react";
import NavigationContext from "../../context/navigationContext";

export default function useNavigation(){

    return useContext(NavigationContext);
};