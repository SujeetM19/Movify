import React , {useState, useEffect} from 'react';
import {Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import {useSelector} from 'react-redux';
import MovieList from '../MovieList/MovieList';
import useStyles from './styles';
import fetchData from '../../services/TMDB';


// import React, { useState, useEffect } from 'react'
import axios from 'axios';
  
function Movies() {
    const classes = useStyles();
    const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
    const page = 1;
    const url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
    const {posts, loading} = fetchData(url);
    const a = posts.results;
    console.log(a);

    // if (!loading && !posts.length) {
    //     return (
    //       <Box display="flex" alignItems="center" mt="20px">
    //         <Typography variant="h4">
    //           No movies that match that name.
    //           <br />
    //           Please searh for something else.
    //         </Typography>
    //       </Box>
    //     );
    //   }

    return (
        <>
            <div className="App">
                { (loading || typeof(a) == 'undefined') ? (
                    <Box display="flex" justifyContent="center">
                        <CircularProgress size="4rem" />
                    </Box>) :
                    (
                        <MovieList movies={ a } />
                    )
                } 
            </div>
        </>
    );
}

export default Movies;