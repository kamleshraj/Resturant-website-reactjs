import React from 'react'
import Banner from '../images/banner.jpeg'
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import styled from 'styled-components';
import MenuList from '../components/MenuList';

const Home = () => {
  return (
      <StyleWrapper>
      <div className='home-hero-banner' style={{backgroundImage:`url(${Banner})`}}>
        <Container>
        <div className='hero-banner-container'>
          <h2>Food Website</h2>
          <p>Best Food in India</p>
          <Link to="/" className='btn-theme order-now'>Order Now</Link>
          </div>
        </Container>
        </div>
        <MenuList/>
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
      h2{font-size:2.5rem}
    .order-now{
      display:block;
      max-width:130px;
      text-align:center;
      text-decoration:none;
      cursor:pointer;
      margin-top:1rem;
      font-weight:700;
      color:#000;
      &:hover{
        background:${({ theme }) => theme.colors.btnBg};
        color:${({theme})=>theme.colors.text}
      }
    }
  }
}
`;
