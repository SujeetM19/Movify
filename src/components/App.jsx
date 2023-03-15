import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import MovieInformation from "./MovieInformation/MovieInformation";
import Actors from "./Actors/Actors";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar"
// import "./App.css"
import useStyles from './styles';

//routing for pages to create a specific routing
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
            <Route exact path = "/movie/:id" element= {<MovieInformation/>} />   
            <Route exact path = "/actors/:id" element= {<Actors/>} />
            <Route exact path = "/profile/:id" element= {<Profile/>} />
            <Route exact path = "/movies" element= {<Movies/>} />
            <Route path = "/"  element= {<Movies/>}/>
        </Routes>
      </main>
      </div>
    
  );
};

export default App;
