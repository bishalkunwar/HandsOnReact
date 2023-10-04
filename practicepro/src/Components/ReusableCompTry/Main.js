// import 'bulma/css/bulma.css';
export default function Main(){
    return(
        <div>
            <ProfileCard image="https://i.imgur.com/xRxg8BPb.jpg" title="Google Alexa" handle="This is the Google Alexa Image" description="This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image, This is the Google Alexa Image."/>
        </div>

            
    );
};

// style={{display:"flex", flexDirection:"row", alignItems:"center", margin: "0px auto", padding: "20px 20px 20px 20px"}}

// function Contents(props){
//     const {image, title, desc} = props;
//     return(
//         <div className="main-container" style={{border:"1px solid black", display: "flex", flexWrap: "wrap", flexDirection: "column", textAlign: "center"}}>
//             <img src={image} alt="img" />
//             <h1>{title}</h1>
//             <p>{desc}</p>
//     </div>
//     );
// };


function ProfileCard({image, media, title, handle, description}){

    return(
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={image} alt="Main Image1"/>  
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-4by3">
                            <img src={media} alt="first media content"/>
                        </figure>
                    </div>
                </div>
                <div className="media-content">
                    <div className="title is-4">
                        <h6>{title}</h6>
                    </div>
                    <div className="subtitle is-6">
                        <p>{handle}</p>
                    </div>
                </div>
                <div className="content">
                    <div className="content is-6">
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        </div> 

    );
};

        // <div>
        //     <p>{image}</p>
        //     <p>{media}</p>
        //     <p>{title}</p>
        //     <p>{handle}</p>
        //     <p>{description}</p>
        // </div>


