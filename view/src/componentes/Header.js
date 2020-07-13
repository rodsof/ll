import React, { useEffect, useContext } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AuthContext from "../context/auth/AuthContext";
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
    borderRadius: 25,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { logout } = authContext;


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
          {<img src="/logo.png" className={classes.image} />}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Movies and TV shows
        </Typography>
          <Button color="inherit" onClick={ () => logout()}>
            LOG OUT
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
