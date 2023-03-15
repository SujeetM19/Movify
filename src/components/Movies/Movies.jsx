// import React , {useState, useEffect} from 'react';
import {Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import {useSelector} from 'react-redux';
// import { useGetMoviesQuery} from '../../services/TMDB'
import MovieList from '../MovieList/MovieList';
import useStyles from './styles';

// function Movies() {
//   console.log('hii');
//   // const {data} = useGetMoviesQuery();
//   const classes = useStyles();


//   // if(isFetching){
//   //   return(
//   //     <Box display="flex" justifyContent="center" >
//   //        <CircularProgress size="4rem"/>
//   //     </Box>
//   //   );
//   // }
//   console.log(data);

//   // if(!data.results.length){
//   //   return (
//   //     <Box display="flex" alignItems="center" mt="20px">
//   //       <Typography variant='h4'>
//   //         No movies that match that name.
//   //         <br/>
//   //         Please search for something else.
//   //       </Typography>
//   //     </Box>
//   //   );
//   // }

//   // if(error) return 'An error has occured.';

//   return (
//     <div>
//        hello
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react'
import axios from 'axios';
  
function Movies() {
  
    const [loading, setLoading] = useState(false);
    let [posts, setPosts] = useState([]);
  
    useEffect(() => {
        const loadPost = async () => {
  
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);
  
            // Await make wait until that 
            // promise settles and return its result
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/");

            console.log(typeof(posts));
  
            // After fetching data stored it in posts state.
            setPosts(response.data);

            // Closed the loading page
            setLoading(false);
        }
  
        // Call the function
        loadPost();
    }, []);

    return (
        <>
            <div className="App">
                { loading ? (
                    <h4>Loading...</h4>) :
                    (
                        posts.map((item) =>
                        // Presently we only fetch 
                        // title from the API 
                        <h4>{item.title}</h4>)
                    )
                } 
            </div>
        </>
    );
}

export default Movies;