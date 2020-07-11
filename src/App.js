import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import SearchForm from './componentes/SearchForm';
import MoviesProvider from './context/MoviesContext';
import MoviesList from './componentes/MoviesList';

function App() {
  return (
    <MoviesProvider>
    <div className="App">
     <Header />
     <div>
     <SearchForm />
     </div>
     <MoviesList/>
    </div>
    </MoviesProvider>
  );
}

export default App;
