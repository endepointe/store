import React,
{
  useState
} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import StoreIcon from '@material-ui/icons/Store';
import {
  Link,
} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import CartItemList from './CartItemList';

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
  modal: {
    paddin: 0,
    margin: '0 auto',
    maxWidth: '500px',
  }
}));

const Navbar = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <AppBar className={classes.nav}>
      <h1 className={classes.logo}>
        <Link
          onClick={() => console.log('open modal')}
          className={classes.link}
          to="/">
          <div className={classes.logoName}>
            <FingerprintIcon style={{ fontSize: 40 }} />
            Company Name
          </div>
        </Link>
      </h1>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link
            onClick={() => console.log('open modal')}
            className={classes.link}
            to="/shop">
            <div className={classes.linkIcons}>
              <StoreIcon />Shop
            </div>
          </Link>
        </li>
        <li className={classes.li}>
          <Link
            onClick={() => console.log('open modal')}
            className={classes.link}
            to="/contact">
            <div className={classes.linkIcons}>
              <EmailIcon />Contact
            </div>
          </Link>
        </li>
        <li className={classes.li}>
          <Link
            onClick={openCart}
            className={classes.link}
            to="/cart">
            <div className={classes.linkIcons}>
              <ShoppingCartIcon />Cart
            </div>
          </Link>
        </li>
      </ul>
      <Dialog
        aria-labelledby="Cart"
        aria-describedby="Your cart items"
        fullWidth={true}
        className={classes.modal}
        onClose={handleClose}
        open={open}>
        <CartItemList />
      </Dialog>
    </AppBar>
  )
}

export default connect(null, {})(Navbar);