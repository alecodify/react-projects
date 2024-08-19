import { useState, useEffect } from 'react'
import { AppBar, Grid, Toolbar, Card, styled } from '@mui/material';
import * as api from './api';

const StyledCard = styled(Card)({
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    borderRadius: 0,
    height: 200,
  },
  '@media (max-width: 600px)': {
    height: 150,
  },
  '@media (min-width: 600px)': {
    height: 200,
  }
});

function App() {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    const getData = async () => {
      let response = await api.getMemes();
      setMemes(response.data.children);
    }
    getData();
  }, [])

  return (
    <div>
      <AppBar color='action' position='static'>
        <Toolbar>
          <img src='/logo.png' alt="" style={{ width: 100 }} />
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} style={{padding: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        {
          memes.map((meme, index) => (
            <Grid key={index} item xs={10} sm={6} md={4} lg={3}>
              <StyledCard>
                <img src={meme.data.url} alt="meme" style={{height: 200}} />
              </StyledCard>
            </Grid>
          ))
        }
      </Grid>

    </div>
  )
}

export default App
