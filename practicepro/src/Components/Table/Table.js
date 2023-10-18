export default function Table({fruits}){
    
    const renderedData = fruits.map((fruit) => {
        return(
            <tr key={fruit.name}>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
                <td>{fruit.score}</td>
            </tr>
        );
    });

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Fruit</th>
                        <th>Color</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </table>
        </div>
    );
};