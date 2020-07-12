import React, { useEffect, useContext } from "react";
import { AppBar, IconButton, Toolbar, Button, Typography, makeStyles } from "@material-ui/core";
import AuthContext from '../context/auth/AuthContext';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image: {
        width: 95,
        height: 70,
        borderRadius: 25
    }
  }));


const Header = ({props, isLoggedIn}) => {
    const classes = useStyles();

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { user, autenticatedUser, logout  } = authContext;

    const handleLogout = () => {
      logout();
      //props.history.push('/');
    }
    useEffect(() => {
        autenticatedUser();
        // eslint-disable-next-line
    }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
        className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          href="/"
        >
          { <img src="/logo.png" className={classes.image} /> }
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        Movies and TV shows
        </Typography>
        { isLoggedIn ? 
         <Button color="inherit"  onClick={handleLogout}>LOG OUT</Button> : 
         <Button color="inherit" href="/signup">SIGN UP</Button>}
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;
