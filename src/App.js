import React, {useEffect,useState} from 'react';
import './App.css';
import Login from "./Login";
import {getTokenFromUrl} from './spotify'

function App() {
const [token, setToken] = useState(null);

useEffect(() => {

  const _token = getTokenFromUrl()
  window.location.hash = "";

  if(_token){
    setToken(_token);
  }
  console.log(_token);
}, []);

  return (
    <div className="App">
      {token? <h1>I am logged in</h1>:<Login />}
    </div>
  );
}

export default App;
