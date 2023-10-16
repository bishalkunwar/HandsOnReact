import { useContext } from "react";
import NavigationContext from "../../context/navigationContext";

export default function Link({to, children}){
    
    const {navigate} = useContext(NavigationContext);
    const handleClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }
        
        e.preventDefault();
        navigate(to);

    };

    return <a  href={to} onClick={handleClick}>{children}</a>
}