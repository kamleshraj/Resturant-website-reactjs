import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Resturant Website
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <NavLink to='/'>Home</NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink to='/menu'>Menu</NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink to='/abouts'>Aboutus</NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink to='/contactus'>Contactus</NavLink>
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <Box sx={{ display: 'flex',pt:10 }}>
      <HideOnScroll {...props}>
      <AppBar component="nav" position="fixed" sx={{bgcolor:'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Resturant Website
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <List sx={{display:'flex'}}>
                <ListItem disablePadding>
                  <NavLink to='/'>Home</NavLink>
                </ListItem>
                <ListItem disablePadding>
                  <NavLink to='/menu'>Menu</NavLink>
                </ListItem>
                <ListItem disablePadding>
                  <NavLink to='/aboutus'>Aboutus</NavLink>
                </ListItem>
                <ListItem disablePadding>
                  <NavLink to='/contactus'>Contactus</NavLink>
                </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
</HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Header
