import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Artists() {
  const classes = useStyles();

  const [token,setToken] = useState(sessionStorage.getItem('token'));
  const [artist,setArtist] = useState(JSON.parse(sessionStorage.getItem('artists')));
  console.log(artist);

  useEffect(()=>{

    setArtist(JSON.parse(sessionStorage.getItem('artists')));
  },[])

  return (
    <div className={classes.root}>
      <div className="container-fluid">
      <Grid container spacing={3}>
      {artist.data.artists.items.map( item=>{
        return(
          <Grid item sm={4}>
            <a href={item.external_urls.spotify} target="_blank">
            <Card className={classes.root}  style={{backgroundColor:'rgb(65, 62, 62)',color:'white'}}>
              <CardActionArea>
              <img src={item.images[1].url} className="img-fluid rounded-circle py-2"></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {item.name}
                </Typography>
                <Typography  style={{color:'white'}} variant="body2" color="textSecondary" component="p">
                 Artist
                </Typography>
              </CardContent>
            </CardActionArea> 
          </Card>
          </a>
        </Grid>
        )
      })}
      </Grid>
      </div>
    </div>
  )
}

export default Artists
