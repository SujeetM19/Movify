import React , {useEffect} from 'react';

import {Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from '@mui/material';
import { Link } from 'react-router-dom';
import {useTheme} from '@mui/styles';
import useStyles from './styles';
import fetchData from '../../services/TMDB';

const redLogo = "https://cdn.logojoy.com/wp-content/uploads/2018/05/29153822/6_big.png";
const blueLogo = "https://cdn.logojoy.com/wp-content/uploads/2018/05/29153827/81.png";

const demoCategories = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value:'top_rated'},
    {label: 'Upcoming', value: 'upcoming'},
];

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// console.log("genreData");
const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`;
const {genres, loading} = fetchData(url);
// const a = genres.genres;
console.log(genres);


function Sidebar ({setMobileOpen}) {
    const theme = useTheme();
    const classes = useStyles();
  return (
    <>
        <Link to="/" className = {classes.imageLink }>
            <img 
                className = {classes.image}
                src = {theme.palette.mode === 'light' ? redLogo : blueLogo}
                alt= "Filmpire logo" 
            />
        </Link>

        <Divider />


        <List>
            <ListSubheader>Categories</ListSubheader>
            {demoCategories.map(({label, value}) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className= {classes.genreImages} height={30}/>
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                     </ListItem>
                </Link>
            ))}
        </List>


        <Divider />
        <List>
            <ListSubheader>Genres</ListSubheader>
                { (loading || typeof(genres) == 'undefined') ? (
                    <Box display="flex" justifyContent="center">
                        <CircularProgress />
                    </Box>
                    ) :
                    (
                        <div>Hello</div>
                    )
                    
                } 

        </List>
        
    </> 
  );
}

export default Sidebar