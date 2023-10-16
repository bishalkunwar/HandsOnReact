import classNames from "classnames";

import useNavigation from "../hooks/useNavigation";
// import { useContext } from "react";
// import NavigationContext from "../../context/navigationContext";

export default function Link({to, children}){
    
    const classes = classNames('text-blue-500')

    const {navigate} = useNavigation();
    const handleClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }

        e.preventDefault();
        navigate(to);

    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}