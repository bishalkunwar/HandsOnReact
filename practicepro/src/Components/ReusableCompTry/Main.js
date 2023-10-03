export default function Main(){
    return(
        <div className="main" style={{display:"flex", flexDirection:"row", alignItems:"center", margin: "0px auto", padding: "20px 20px 20px 20px"}}>
            <Contents image="hello.png" title="hello" desc="ram ram ram"/>
            <Contents image="hello.png" title="hello" desc="ram ram ram"/>
            <Contents image="hello.png" title="hello" desc="ram ram ram"/>
        </div>

    )
}

function Contents(props){
    const {image, title, desc} = props;
    return(
        <div className="main-container" style={{border:"1px solid black", display: "flex", flexWrap: "wrap", flexDirection: "column", textAlign: "center"}}>
            <img src={image} alt="img" />
            <h1>{title}</h1>
            <p>{desc}</p>
    </div>
    );
};