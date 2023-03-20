import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Movies from './../Movies/Movies'
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1; //dummy variable

import useStyles from './styles';
// import { searchMovie } from '../../features/currentGenreOrCategory';
import fetchData from "../../services/TMDB";


function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  // const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(query);
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${tmdbApiKey}`;
      console.log(url);
    //  const { posts, loading, setUrl } = fetchData();

    //   useEffect(()=>{
    //     setUrl(url);
    //   }, [])
    
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;