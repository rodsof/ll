import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const MoviesContext = createContext();

const MoviesProvider = (props) => {

    const [movies, saveMovies] = useState([]);
    const [search, searchMovies] = useState({
        title: '',
        type: ''
    });
    const [ searchMade, saveSearch] = useState(false);

    const { title, type} = search;

    useEffect(() => {
        if(searchMade) {
            var url;
            const getMovies = async () => {
                if(type === 'All'){
                    url = `https://www.omdbapi.com/?apikey=a2c11b79&s=${title}`;
                }
                else{
                    url = `https://www.omdbapi.com/?apikey=a2c11b79&s=${title}&type=${type}`;
                }

                const result = await axios.get(url);

                console.log(result.data.Search);
                saveMovies(result.data.Search);
            }

           getMovies();
        }

    }, [search]);

    return ( 
        <MoviesContext.Provider
            value={{
                movies,
                searchMovies, 
                saveSearch
            }}
        >
            {props.children}
        </MoviesContext.Provider>
     );
}
 
export default MoviesProvider;