import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {getTokenFromUrl} from './spotify'

// const axios = require('axios');

export default function Home() {

  const _token=getTokenFromUrl()
  console.log(_token);
  const [token,setToken] = useState(sessionStorage.getItem('token'));
  const [user,setUser] = useState(null);
  console.log(user);

  const userEndpointUrl = 'https://api.spotify.com/v1/me';

  const fetchUserDataHandler = async () => {
    return axios(userEndpointUrl,{
      method:'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${token}`,
      }
    }).then(res=>{
      console.log(res);
      setUser(res);
    }).catch(err => console.log(err));
  };

  if(token){
    fetchUserDataHandler();
  }

  return (
    <div>
    {user?<div style={{display:"grid",backgroundColor:'black',height:'100vh',placeItems:"center"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img className="rounded-circle" src={user.data.images[0].url}></img>
          </div>
          <div className="col-sm-6 text-white py-5">
            <table className="table text-white">
                <tbody>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>{user.data.display_name}</td>
                </tr>
                <tr>
                  <td>Followers</td>
                  <td>:</td>
                  <td>{user.data.followers.total}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>:null}
    </div>
    // <div>
    //   Hello
    // </div>
  )
}
