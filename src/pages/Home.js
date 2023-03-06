import React from 'react'
import Banner from '../images/banner.jpeg'
import { Container } from '@mui/system';
import { Button, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import MenuItems from '../components/MenuList';
import Title from '../components/Title';
//import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <StyleWrapper>
      <Box className='home-hero-banner' style={{backgroundImage:`url(${Banner})`}}>
        <Container>
          <Box className='hero-banner-container'>
            <Title title='Delicious Food' subtitle='TASTY AND CRUNCHY'/>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco
            </Typography>
            <Button variant="outlined">View Our Menu</Button>
          </Box>
        </Container>
      </Box>
      <Box gutterbottom className='main-section our-story-section'>
        <Box className='content-container'>
        <Title title='OUR STORY' subtitle='TASTY AND CRUNCHY' />
        <Typography variant='body2' component='div'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.
        </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box className='main-section menu-items'>
          <Title title='Our Menu' subtitle='TASTY AND CRUNCHY'/>
          <MenuItems />
        </Box>
      </Container>
    </StyleWrapper>
  )
}
export default Home

const StyleWrapper = styled.section`
.home-hero-banner {
    background-position:center;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .hero-banner-container{
      max-width:400px;
    }
}
.our-story-section{
    background:${({ theme }) => theme.colors.greybg};
    .content-container{
        max-width:650px;
        margin:auto;
    }
}
`;
