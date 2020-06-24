import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
  Link
} from 'react-router-dom';

//https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=455A64
// colors
// #0288d1
// #5eb8ff
// #005b9f

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1 
  },
  nav: {
    backgroundColor: '#0288d1'
  }
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar className={classes.nav}>
      <ul>
        <li>
          <Link to="/">link 1</Link>
        </li>
        <li>
          <Link to="/cart">link 2</Link>
        </li>
        <li>
          <Link to="/signin">link 3</Link>
        </li>
      </ul>
    </AppBar>
  )
}

export default Navbar;