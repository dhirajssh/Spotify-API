import React, {useEffect,useState} from 'react';
import './App.css';
import Login from "./Login";
import {getTokenFromUrl} from './spotify'
import axios from 'axios';
import Artists from './Artists';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
const [token, setToken] = useState(null);
const [artist, setArtist] = useState([]);
const [display,setDisplay] = useState(false);
let artists;

useEffect(() => {

  const _token = getTokenFromUrl()
  window.location.hash = "";

  if(_token){
    setToken(_token);
    // console.log(_token);
  }

  // for user
  axios({
    method:"GET",
    url:"https://api.spotify.com/v1/me",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      Authorization:`Bearer ${_token}`
    },data:{

    },
  })
  .then((response)=>{
    console.log(response.data);
  })
  .catch(error=>{
    console.log(error);
  })

  //for followed artists
  axios({
    method:"GET",
    url:"https://api.spotify.com/v1/me/following?type=artist&limit=20",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      Authorization:`Bearer ${_token}`
    }
  })
  .then((response)=>{
    console.log(response.data.artists.items);
    setArtist(response.data.artists.items);
    artists = response.data.artists.items
    console.log(artists);
    setDisplay(true);
    console.log(display);
  })
  .catch(error=>{
    console.log(error);
  })
}, []);

  return (
    <div className="App">
      
        {token? null : < Login/>}
        {display? <Artists artist={artist}/> : null}
      
    </div>
  );
}

export default App;
