import React from 'react';
import AppBarSearch from "../AppBar/AppBarSearch";
import PokemonCard from '../PokemonCard/PokemonCard';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from "react";

const HomePage = () => {
    const [searchval,setsearchval]=useState("");
    const [pok, setpok] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
            .then(response => response.json())
            .then(data => setpok(data.results))

    });
    const search=(target)=>{
                setsearchval(target);
    }

    return (
        <>
            <AppBarSearch search={search} />
            <Grid container>
                <Grid item xs={1} />
                <Grid container item spacing={1} xs={10} justify="center">
                {pok.map((val, id) => {
                    return (val.name.includes(searchval)&&<PokemonCard key={id} id={id} name={val.name} />)
                })
                }
            </Grid>
            <Grid item xs={1} />
        </Grid>
        </>
    );
};

export default HomePage;