import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Artists({token,artist}) {
  console.log('hello');
  const [id,setId] = useState()

  console.log(artist);
  
  artist.forEach(element => {
    console.log(element.name);
    console.log(element.id);
    console.log(element.images[0])
  });

  return (
    <div>
      Hello There
    </div>
  )
}

export default Artists
