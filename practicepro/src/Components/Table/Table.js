
export default function Table({fruits, config, keyFn}){
 
    const renderedHeaders = config.map((headers)=>{
        return(
            <th key={headers.label}>{headers.label}</th>
        );
    });

    const renderedData = fruits.map((fruit) => {
        
        const renderedCells = config.map((cols)=>{
            return(
                <td key={cols.label} className="p-2">{cols.render(fruit)}</td>
            );
        });

        return(
            <tr key={keyFn(fruit)} className="border-b">
                {renderedCells}
                {/* <td className="p-3">{config[0].render(fruit)}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${config[1].render(fruit)}`}>
                        
                    </div>
                </td>
                <td className="p-3">{config[2].render(fruit)}</td> */}
            </tr>
        );
    });

    return(
        <div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-3 ">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </table>
        </div>
    );
};