import Link from "./Link";

export default function Sidebar(){
    const links  = [
        {
            label: 'DropDown', path: '/dropDown'
        },{
            label: 'Accordion', path: '/'
        },{
            label: 'Buttons', path: '/buttons'
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