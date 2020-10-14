import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Home() {

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} mb={4}>
              <h1>Top Box</h1>
            </Grid>
            <Grid item xs={12}>
              <h1>Lower Box</h1>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
