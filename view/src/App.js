import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header";
import SearchForm from "./componentes/SearchForm";
import MoviesProvider from "./context/MoviesContext";
import MoviesList from "./componentes/MoviesList";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import tokenAuth from "./config/token";
import AuthState from "./context/auth/AuthState";
import Login from "./componentes/Login";
import { Typography } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignUp from "./componentes/SignUp";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      light: "#757ce8",
      main: "#ff5722",
    },
  },
});

// check if there is a token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  if (token) {
    return (
      <ThemeProvider theme={theme}>
        <AuthState>
          <MoviesProvider>
            <Router>
              <div className="App">
                <Header isLoggedIn={true} />
                <Switch>
                  <Route exact path="/">
                    <div style={{ width: 1000 }}>
                      <SearchForm />
                    </div>
                    <MoviesList />
                  </Route>
                </Switch>
              </div>
            </Router>
          </MoviesProvider>
        </AuthState>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <Router>
          <div className="App">
            <Header isLoggedIn={false} />
            <Switch>
              <Route exact path="/">
                <Typography component="h1" variant="h5" align="center">
                  Search for your favorite movies and TV shows
                </Typography>
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
