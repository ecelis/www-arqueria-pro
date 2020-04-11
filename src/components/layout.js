import React from "react"
import Header from "../components/header";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';

const title = `Arqueria.pro`;

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://arqueria.pro/">
        Arqueria.pro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#4b0082',
    color: '#fff',
    fontFamily: 'Fira Sans',
    fontSize: '2.5rem',
    textShadow: '0.05rem .1rem rgba(0,0,0,.5)',
  },
  h5: {
    marginBottom: '.5rem',
    fontWeight: '500',
    lineHeight: '1.2',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto'
  },
}));

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div id="container" className={classes.root}>
            <Header title={title}/>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="lg">
                {children}
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                <Typography variant="body1">
                  <Link href='https://twitter.com/ArqueriaP'><TwitterIcon /></Link>
                  </Typography>
                <Copyright />
                </Container>
            </footer>
        </div>
    );
};

export default Layout;
