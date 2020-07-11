import React, { useContext, useState } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { TextField, makeStyles, MenuItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Formulario = () => {

    const [ search, setSearch] = useState({
        title: '',
        type: ''
    });


    const { searchMovies, saveSearch } = useContext(MoviesContext );

    // función para leer los contenidos
    const getMovies = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

   
      const classes = useStyles();

    return ( 
        <form className={classes.root} autoComplete="on"
            onSubmit={ e => {
                e.preventDefault();
                searchMovies(search);
                saveSearch(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search Movies</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <TextField
                        name="title"
                        type="text"
                        label="Title"
                        placeHolder="Search by title"
                        onChange={getMovies}
                    />
                </div>
                <div className="col-md-4">
                    <TextField
                        name="type"
                        label="Type"
                        select
                        helperText="Please select a type"
                        onChange={getMovies}
                    >
                        <MenuItem value="">-- All--</MenuItem>
                            <MenuItem value="movie">Movies</MenuItem>
                            <MenuItem value="series">TV Shows</MenuItem>
                    </TextField>
                </div>

                    <Button
                    variant="contained"
                    color="primary"
                        type="submit"
                    >Search</Button>
            </div>
        </form>
     );
}
 
export default Formulario;