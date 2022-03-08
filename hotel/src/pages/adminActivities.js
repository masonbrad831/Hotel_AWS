import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { activities } from '../components/activities/activityItems'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


var url = 'https://sw6zper811.execute-api.us-west-2.amazonaws.com/test/activities';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {

    const[heading, setHeading] = React.useState('');
    const[type, setType] = React.useState('');
    const[desc, setDesc] = React.useState('');
    const[link, setLink] = React.useState('');
    const[img, setImg] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {heading, type, desc, link, img};

        console.log(item)
        axios.post(url, item)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }


    const [data, setData] = React.useState([{}])

    function deleteActivity(id){
        var newUrl = url + '?id=' + id;
        fetch(newUrl, {method : 'DELETE'});
        console.log(newUrl)
        getActivities();
    }

    function getActivities() {
        fetch(url).then(
        res => res.json()
        ).then (
            data => {
            setData(data.body)
            console.log('data' + data)
        }
    )}

    React.useEffect(() => {
        getActivities();
    }, [])

    


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Activities
            </Typography>
            
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Here are a list of activities to check out when you are enjoying your stay at Hotel for ADMIN
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                
            </Stack>
            <form onSubmit={handleSubmit}>
                <h1>Create Activities</h1>
                <input type={'text'} name={'heading'} placeholder={"Name"} required  value={heading} onChange={(e) => setHeading(e.target.value)}></input>
                <input type={'text'} name={'type'} placeholder={"Type"} required  value={type} onChange={(e) => setType(e.target.value)}></input>
                <input type={'text'} name={'desc'} placeholder={"Description"} required  value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                <input type={'text'} name={'img'} placeholder={"Image URL"} required  value={img} onChange={(e) => setImg(e.target.value)}></input>
                <input type={'text'} name={'link'} placeholder={"Website URL"} required  value={link} onChange={(e) => setLink(e.target.value)}></input>
                <button>CREATE</button>
            </form>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((item,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Typography>
                      {item.type}
                    </Typography>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={item.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <a href={item.link}>{item.heading}</a>
                    </Typography>
                    <Typography>
                      {item.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}