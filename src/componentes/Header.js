import React from "react";
import { AppBar, IconButton, Toolbar, Button, Typography, makeStyles } from "@material-ui/core";

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
        width: 85,
        height: 70,
        borderRadius: 25
    }
  }));


const Header = () => {
    const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
        classes={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <img src="/logo.png" className={classes.image} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        Movies and TV shows?
        
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
