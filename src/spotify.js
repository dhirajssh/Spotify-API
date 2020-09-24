export const url = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "23e9426f667c4e48ab493dc55eb4cd3e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = ()=>{
  let access_token = window.location.hash
  access_token = access_token.substring(14,190);
  return access_token;
}

export const loginUrl =`${url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;