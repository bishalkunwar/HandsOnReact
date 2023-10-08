import axios from 'axios';


// axios is a package which offers multiple functions like get post to play with the API.

const searchImages = async(term) =>{
    
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID KUVBYR2VZiDoeJ1K9UGjlfq4xMd3ZOa0DApvsoocI84',
            },
    
            params: {
                query: term,
            },
        });
    
        console.log(response);
    
        return response.data.results;  
    } catch (error){
        console.log(error);
    }
};

export default searchImages;

