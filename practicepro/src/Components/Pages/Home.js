
import AccordionPage from "./AccorodianPages";
import ButtonPages from "./ButtonPages";
import DropDownPage from "./DropDownPages";
// import Link from "../CustomNavigationAndRouting/Link";
import Route from "../CustomNavigationAndRouting/Route";
import Sidebar from "../CustomNavigationAndRouting/Sidebar";
import ModalPage from "./ModalPage";
import TablePage from "../Pages/TablePage";

export default function Home(){

    return(
        <div>
            {/* <Link to="/accordion">Accordion</Link>
            <Link to="/buttons">Buttons</Link>
            <Link to="/dropDown">DropDowns</Link>
         */}
            <Sidebar/>
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
                <Route path="/modalPage">
                    <ModalPage/>
                </Route>
                <Route path="/tablePage">
                    <TablePage/>
                </Route>
            </div>
        </div>
    )
}