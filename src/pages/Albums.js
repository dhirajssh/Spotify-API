import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

function Albums() {
  const classes = useStyles();

  const [token,setToken] = useState(sessionStorage.getItem('token'));
  const [album,setAlbum] = useState(JSON.parse(sessionStorage.getItem('albums')));
  console.log(album);

  

  return (
    <div style={{backgroundColor:'black',height:'100vh',backgroundSize:"cover"}}>
      <div className="container-fluid">
      <Grid container spacing={3}>
      {album.data.items.map( item=>{
        return(
          <Grid item sm={4}>
            <a href={item.album.external_urls.spotify} target="_blank">
            <Card className={classes.root}  style={{backgroundColor:'rgb(65, 62, 62)',color:'white'}}>
              <CardActionArea>
              <img src={item.album.images[1].url} className="img-fluid rounded py-3"></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {item.album.name}
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

export default Albums
