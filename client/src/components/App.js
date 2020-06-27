import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React,
{
  useState
} from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Modal from '@material-ui/core/Modal';
import CartItemList from './CartItemList';



const useStyles = makeStyles((theme) => ({
  root: {
    // 
  },
  header: {
    display: 'block',
    marginTop: '8.5rem',
    marginBotton: '4rem',
    width: '100%',
    minHeight: '380px',
    maxHeight: '80%',
    paddingTop: '120px',
    paddingBottom: '120px',
    paddingLeft: '40px',
    paddingRight: 0,
    backgroundColor: '#CCC',
    // backgroundImage: "url('https://via.placeholder.com/300x380?text=Brand+Name+Here')",
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
  },
  heroMessage: {
    fontSize: '1.2rem',
  },
  featuredProducts: {
    width: '100%',
    margin: '2rem auto',
    textAlign: 'center',
  },
  footer: {
    padding: theme.spacing(6),
  },
  modal: {
    position: 'absolute',
    top: '8rem',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: '80%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://endepointe.com/">
        EndePointe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {

  const [cart, openCart] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const cartClickListener = () => {
    openCart(true);
    console.log('bubbled up to app, show cart');
  }

  return (
    <BrowserRouter>
      <nav>
        <Navbar cartClickListener={cartClickListener} />
      </nav>
      <header className={classes.header}>
        <div className={classes.hero}>
          <FingerprintIcon style={{ fontSize: 120 }} />
          <p className={classes.heroMessage}>Highlight Message</p>
        </div>
      </header>
      <main>
        <h1 className={classes.featuredProducts}>Featured Products</h1>
        <section>
          <Products />
        </section>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Endepointe
          </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          EndeTemplate Store
        </Typography>
        <Copyright />
      </footer>
      {cart ? 
        <div className={classes.modal}>
          <CartItemList/>
        </div> : null}
    </BrowserRouter>
  )
}

export default App;