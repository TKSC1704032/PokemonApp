import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 375,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
})

const useStyles = makeStyles({
  card:{
    maxWidth: "200px",
  },
  
  img: {
    maxWidth: "170px",
    height:"auto",
    backgroundPosition:"center",
    margin:"0 auto"
  }

});

export default function PokemonCard(props) {
  const classes = useStyles();
  const img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id+1}.png`
  return (
    <>
    <ThemeProvider theme={theme}>
    <Grid item xs={12} sm={6} md={3} lg={2} className={classes.card} >
      <Paper>
    <Card >
      <CardActionArea >
        <CardMedia className={classes.img}
          component="img"
          alt={props.name}
          height="140"
          image={img}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
        <Link style={{color:"white",textDecoration:"none" }} to={`/${props.id+1}/`}> See More</Link>
        </Button>
      </CardActions>
    </Card>
    </Paper>
    </Grid>
    </ThemeProvider>
    </>
  );
}
