
import { Box, Container } from '@mui/system';
import React from 'react'
import styled from 'styled-components'
import MenuItems from '../components/MenuList';
import Title from '../components/Title';
const StyledWrapper = styled.section`
.menu-list{
}
`;

const Menu = () => {
  return (
  <Box sx={{mt:5}}>
      <StyledWrapper>
        <Container maxWidth="xl">
          <Title title='Delicious Food' subtitle='TASTY AND CRUNCHY'/>
          <MenuItems />
        </Container>
    </StyledWrapper>
  </Box>
  )
}

export default Menu
