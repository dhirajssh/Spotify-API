import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import {getTokenFromUrl} from '../spotify';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }  
}));



export default function Navbar() {

  const classes = useStyles();

  const _token=getTokenFromUrl();

  const [token,setToken] = useState(sessionStorage.getItem('token'));
  const [user,setUser] = useState(null);
  console.log(token);

  useEffect(()=>{
    setToken(sessionStorage.getItem('token'));
    axios({
      method:"GET",
      url:"https://api.spotify.com/v1/me",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      },data:{
  
      },
    })
    .then((response)=>{
      setUser(response.data);
      sessionStorage.setItem('user',JSON.stringify(response));
    })
    .catch(error=>{
      console.log(error);
    })

    axios({
      method:"GET",
      url:"https://api.spotify.com/v1/me/following?type=artist&limit=20",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then((response)=>{
      console.log(response);
      sessionStorage.setItem('artists',JSON.stringify(response));
    })
    .catch(error=>{
      console.log(error);
    })

    axios({
      method:"GET",
      url:'https://api.spotify.com/v1/browse/categories?country=IN&locale=sv_SE&limit=21&offset=0',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then(response=>{
      console.log(response);
      sessionStorage.setItem('genre',JSON.stringify(response));
    })
    .catch(err=>{
      console.log(err);
    })

  },[])

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", color: "#1db954"}}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Spotify
          </Typography>
          <div className="NavBar-block__elem--buttonContainer">
            <Button color="inherit" className="NavBar-block__elem--button"><NavLink to="/albums" activeClassName="NavBar-block__elem--active">Albums</NavLink></Button>
            <Button color="inherit" className="NavBar-block__elem--button"><NavLink to="/genres" activeClassName="NavBar-block__elem--active">Genres</NavLink></Button>
            <Button color="inherit" className="NavBar-block__elem--button"><NavLink to="/artists" activeClassName="NavBar-block__elem--active">Artists</NavLink></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
