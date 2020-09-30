import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {getTokenFromUrl} from './spotify'

export default function Home() {

  const _token=getTokenFromUrl()
  console.log(_token);
  const [token,setToken] = useState(sessionStorage.getItem('token'));

  useEffect(()=>{
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
      console.log(response);
      sessionStorage.setItem('user',JSON.stringify(response));
    })
    .catch(error=>{
      console.log(error);
    })
  },[])

  const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  // console.log(typeof user);

  useEffect(()=>{
    setUser(JSON.parse(sessionStorage.getItem('user')));

  },[])

  console.log(user);

  

  return (
    // <div style={{display:"grid",backgroundColor:'black',height:'100vh',placeItems:"center"}}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-sm-6">
    //         <img className="rounded-circle" src={user.data.images[0].url}></img>
    //       </div>
    //       <div className="col-sm-6 text-white py-5">
    //         <table className="table text-white">
    //             <tbody>
    //             <tr>
    //               <td>Username</td>
    //               <td>:</td>
    //               <td>{user.data.display_name}</td>
    //             </tr>
    //             <tr>
    //               <td>Followers</td>
    //               <td>:</td>
    //               <td>{user.data.followers.total}</td>
    //             </tr>
    //             <tr>
    //               <td></td>
    //               <td></td>
    //               <td></td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>
    <div>
      Hello
    </div>
  )
}
