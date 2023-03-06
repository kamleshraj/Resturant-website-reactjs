
import React from 'react'
import styled from 'styled-components'
import MenuItems from '../components/MenuList';

const StyledWrapper = styled.section`
.menu-list{
}
`;

const Menu = () => {
  return (
  <StyledWrapper>
    <MenuItems/>
  </StyledWrapper>
  )
}

export default Menu
