import React from 'react'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import { AccessAlarm, ThreeDRotation, PhotoCamera } from '@mui/icons-material';
import Button from '@mui/material/Button';
import useStyles from './styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6" color="#fff">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='#fff' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='#fff' paragraph>
              This is a paragraph that consist of several information where you can see it with more in details and also it shows clear information.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant="contained" color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxwidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (

              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use the section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align='center' color='#fff' gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align='center' color='#fff'>
            Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
}

export default App;
