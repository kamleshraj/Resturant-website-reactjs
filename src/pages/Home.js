import React from 'react'
import Layout from './../components/Layout';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <Layout>
      <Container fixed>
        <Typography component="h4">
          Main Carousal Header will come here....
        </Typography>
      </Container> 
    </Layout>
  )
}

export default Home
