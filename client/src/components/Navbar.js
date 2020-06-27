import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import StoreIcon from '@material-ui/icons/Store';
import {
  NavLink
} from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  nav: {
    paddingRight: '2rem',
    backgroundColor: 'var(--navbar-color)',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  ul: {
    display: 'flex',
    alignSelf: 'flex-end',
    flex: 1,
  },
  li: {
    listStyle: 'none',
    marginLeft: '2rem',
  },
  logo: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    alignSelf: 'flex-start',
  },
  logoName: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  linkIcons: {
    display: 'flex',
    alignItems: 'center',
  },

}));

const Navbar = (props) => {

  const classes = useStyles();

  return (
    <AppBar className={classes.nav}>
      <h1 className={classes.logo}>
        <NavLink
          onClick={() => console.log('open modal')}
          className={classes.link}
          to="/">
          <div className={classes.logoName}>
            <FingerprintIcon style={{ fontSize: 40 }} />
            Company Name
          </div>
        </NavLink>
      </h1>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <NavLink
            onClick={() => console.log('open modal')}
            className={classes.link}
            to="/shop">
            <div className={classes.linkIcons}>
              <StoreIcon />Shop
            </div>
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink
            onClick={() => console.log('open modal')}
            className={classes.link}
            to="/contact">
            <div className={classes.linkIcons}>
              <EmailIcon />Contact
            </div>
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink
            onClick={props.cartClickListener}
            className={classes.link}
            to="/cart">
            <div className={classes.linkIcons}>
              <ShoppingCartIcon />Cart
            </div>
          </NavLink>
        </li>
      </ul>
    </AppBar>
  )
}

export default Navbar;