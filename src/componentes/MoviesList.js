import React, { useContext }  from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { GridList, Grid } from '@material-ui/core';

const MoviesList = () => {
    const { movies } = useContext(MoviesContext);

    return ( 
        <GridList>
            {movies.map( movie => (
                <Grid item xs={4}>
dsfsdf
                </Grid>
            ))}
        </GridList>
     );
}
 
export default MoviesList;