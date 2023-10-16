
import AccordionPage from "./AccorodianPages";
import ButtonPages from "./ButtonPages";
import DropDownPage from "./DropDownPages";
import Link from "../CustomNavigationAndRouting/Link";
import Route from "../CustomNavigationAndRouting/Route";


export default function Home(){

    return(
        <div>
            <Link to="/accordion">Accordion</Link>
            <Link to="/buttons">Buttons</Link>
            <Link to="/dropDown">DropDowns</Link>
        
            <div>
            <Route path="/accordion">
                    <AccordionPage/>
            </Route>

            <Route path="/buttons">
                    <ButtonPages/>
            </Route>

            <Route path="/dropDown">
                    <DropDownPage/>
            </Route>
            </div>
        </div>
    );
}