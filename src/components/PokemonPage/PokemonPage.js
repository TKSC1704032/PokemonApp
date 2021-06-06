import React from 'react';
import { Link, useParams, withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles({

    root: {
        paddingTop: "50px",
        maxWidth: "600px",
        margin: "10px auto"

    },
    cardPad: {
        padding: "20px",
        '& img': {
            width: "100%"
        }
    }
}
)


const PokemonPage = (props) => {
    const [state, setstate] = useState({});
    const [find, setfind] = useState(true);
    const classes = useStyles();
    let { pokId } = useParams();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokId}`)
            .then((response) => {

                if (response.status === 404) {
                    setfind(false)
                }
                return response.json()

            })
            .then(data => setstate(data)

            )
    }, [])
    console.log(state);
    const imgsvg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokId}.svg`;
    return (<>
        {

            find ? <Grid container className={classes.root}>
                <Grid item sm={2} />
                <Grid item sm={8}>
                    {state.moves ? <Paper>
                        <Card className={classes.cardPad}>
                            <CardContent>
                                {state.name && <img src={imgsvg} alt={state.name} />}
                                <Typography variant="h3">{state.name && `Name: ${state.name.toUpperCase()}`}</Typography>
                                <Typography variant="h5">{state.height && `Height: ${state.height}`}</Typography>
                                <Typography variant="h5">{state.weight && `Weight: ${state.weight}`}</Typography>
                                <Typography variant="h5">{state.base_experience && `Base Experience: ${state.base_experience}`}</Typography>
                                <Typography variant="h5">{state.moves && `Moves: ${state.moves.length}`}</Typography>
                            </CardContent>
                        </Card>
                    </Paper> : <CircularProgress />}
                </Grid>
                <Grid item sm={2} />
            </Grid> :
                <Typography variant="h1">Not Found Any Pokemon</Typography>
        }
        <Button variant="outlined" color="secondary" style={{ position: "sticky", bottom: "1%", left: "2%" }}>
            <Link to="/" style={{ textDecoration: "none", color: "red", fontWeight: "700" }}>Go To Home</Link>
        </Button>
    </>
    );
};

export default withRouter(PokemonPage);