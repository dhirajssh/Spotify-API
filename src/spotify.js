export const url = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/home";
const clientId = "23e9426f667c4e48ab493dc55eb4cd3e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "user-library-read",
  "user-follow-read",
];



export const getTokenFromUrl = ()=>{
  let string = window.location.hash;
  let _and = string.indexOf('&');
  let access_token=string.substring(14,_and);
  sessionStorage.setItem('token', access_token);
  return access_token;
}

export const loginUrl =`${url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;