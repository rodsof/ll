import React, { useContext }  from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { GridList, Grid } from '@material-ui/core';
import Movie from './Movie';

const MoviesList = () => {
    const { movies } = useContext(MoviesContext);
    if(movies){
    return ( 
        <Grid container spacing={3}>
            {movies.map( movie => (
                    <Movie 
                    movie = {movie}
                    key = {movie.imdbID}
                    />
            ))}
        </Grid>
     );
    }
    return (
        <h1> We couldn't find what you were looking for</h1>
    )
}
 
export default MoviesList;