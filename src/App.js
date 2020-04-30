import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { createMuiTheme } from '@material-ui/core/styles';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href=''>
        jeroentheunissen.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Titillium Web'
  },
  shape: {
    borderRadius: '0px'
  }
});

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  avatar: {
    height: '220px',
    width: '220px',
    margin: theme.spacing(0, 0, 6, 0)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random',
    title: 'AirBnbClone',
    bodycontent:
      'React Node webapp, redux for statemanagement, styled-components for styling'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random',
    title: 'E-commerce App',
    bodycontent:
      'React Node webapp, redux for statemanagement, styled-components for styling'
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random',
    title: 'Social Network App',
    bodycontent:
      'React Node webapp, redux for statemanagement, styled-components for styling'
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/random',
    title: 'Blog App',
    bodycontent:
      'React Node webapp, redux for statemanagement, styled-components for styling'
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/random',
    title: 'E-commerce app',
    bodycontent:
      'React Node webapp, redux for statemanagement, styled-components for styling'
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/random',
    title: 'Event planner app',
    bodycontent:
      'React Node webapp, redux for statemanagement, styled-components for styling'
  }
];

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='md'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              <Avatar
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
                className={classes.avatar}
              />
            </Grid>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Welcome!
            </Typography>

            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              My name is Jeroen. After living many years in Amsterdam, I now
              live in a tiny village in the Catalan countryside, less than an
              hour away from Barcelona. I'm a Modern Javascript developer
              focused on React with Redux and Node with Express. Go and have a
              look at the projects I've built and check the source code on my
              Github. If you like what you see and you think I can be of any
              value for your project, don't hesitate to contact me via Linkedin.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Github
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Linkedin
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.maxWidth} xs={12} sm={6} md={4}>
                <Card variant='outlined' className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.title}
                    </Typography>
                    <Typography>{card.bodycontent}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant='outlined' size='small' color='primary'>
                      View project
                    </Button>
                    <Button size='small' variant='contained' color='primary'>
                      Source Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom></Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          ></Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
