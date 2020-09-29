import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Albums() {

  const [token,setToken] = useState(sessionStorage.getItem('token'));
  const [album,setAlbum] = useState(null);

  useEffect(()=>{
    axios({
      method:"GET",
      url:'https://api.spotify.com/v1/me/albums?offset=0&limit=20',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      },data:{
  
      },
    })
    .then((response)=>{
      console.log(response);
      setAlbum(response);
      // sessionStorage.setItem('user',JSON.stringify(response));
    })
    .catch(error=>{
      console.log(error);
    })
  },[])

  return (
    <div>
      <h1>Albums</h1>
    </div>
  )
}

export default Albums
