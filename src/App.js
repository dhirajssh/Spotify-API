import React, {useEffect,useState} from 'react';
import './App.css';
import Login from "./Login";
import {getTokenFromUrl} from './spotify'
import axios from 'axios';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Albums from '../src/pages/Albums';
import Artists from '../src/pages/Artists';

function App() {
const [token, setToken] = useState(null);
const [artist, setArtist] = useState([]);
const [display,setDisplay] = useState(false);
const [user,setUser] = useState(null);
let artists;

useEffect(() => {

  const _token = getTokenFromUrl()
  window.location.hash = "";

  if(_token){
    setToken(_token);
    // console.log(_token);
  }

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
    <Router>
      <div className="App">
          {token? <Navbar /> : null}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/albums" exact component={Albums} />
            <Route path="/artists" exact component={Artists} />
          </Switch>
        
      </div>
    </Router>
  );
}

export default App;
