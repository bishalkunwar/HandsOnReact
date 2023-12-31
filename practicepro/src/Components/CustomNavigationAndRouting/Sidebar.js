import Link from "./Link";

export default function Sidebar(){
    const links  = [
        {
            label: 'DropDown', path: '/dropDown'
        },{
            label: 'Accordion', path: '/accordion'
        },{
            label: 'Buttons', path: '/buttons'
        },{
            label: 'Modal', path: '/modalPage'
        },{
            label: 'Table', path: '/tablePage'
        },{
            label: 'Counter', path: '/counterPage'
        },

    ];

    const renderLinks = links.map((link)=>{
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })

    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderLinks}
        </div>
    );
};