import React, { useState, useEffect } from 'react'
import axios from 'axios';
  
export default function movieData(url) {
  
    const [loading, setLoading] = useState(false);
    let [posts, setPosts] = useState([]);
    const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
    const page = 1; //dummy variable
    useEffect(() => {
        const loadPost = async () => {
            
            setLoading(true);
            const response = await axios.get(url);

            if(typeof(response) != 'undefined'){
                setPosts(response.data);
            }
            

            console.log(typeof(posts));
            console.log(posts);

            setLoading(false);
        }

        loadPost();
    }, []);
    
    return {posts, loading};

}


 