import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import MovieInformation from "./MovieInformation/MovieInformation";
import Actors from "./Actors/Actors";
import Movies from "./Movies/Movies";
import "./App.css"

//routing for pages to create a specific routing
const App = () => {

  return (
    <div className="named">
      <CssBaseline />
      <h1>hiii</h1>

      <main>
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
