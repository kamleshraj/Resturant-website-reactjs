import { List, ListItem, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <Box component="footer" sx={{padding:'30px 0','& h4':{fontWeight:'300',borderBottom:'1px solid #e9e9e9'}}}>
      <Container>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Box>
              <Typography variant='h6' component='h4'>
                Address 
            </Typography>
            <Typography variant='body2' component='div'>
              <br/>
              <strong>Reliable and Regular Updates</strong>
              <address>FoodDesk is a time-tested author with years' experience.<br />
              pin code - 411017
                </address>
              </Typography><br/>
              <Typography variant='h6' component='h6'>
                  Contact Details
              </Typography>
              <List>
                  <ListItem><Link to='tel:+10198425425'>+10198425425</Link></ListItem>
                  <ListItem><Link to='mailto:order@gamil.com'>order@gmail.com</Link></ListItem>
                  <ListItem><Link to='mailto:suppert@gmail.com'>supper@gmail.com</Link></ListItem> 
                </List>
          </Box>
          <Box>
              <Typography variant='h6' component='h4'>
                Menu 
              </Typography>
              
              <List>
                <ListItem><Link>Special Menu</Link> </ListItem>
                <ListItem><Link>Today Special</Link></ListItem>
                <ListItem><Link>Summer Special</Link></ListItem>
                <ListItem><Link>Winter Special</Link></ListItem>
              </List>
          </Box>
          <Box>
              <Typography variant='h6' component='h4'>
                Privacy Policy
              </Typography>
              <List>
                <ListItem><Link>Order Policy</Link> </ListItem>
                <ListItem><Link>Exchange</Link></ListItem>
                <ListItem><Link>Damage</Link></ListItem>
                <ListItem><Link>Refund Policy</Link></ListItem>
              </List>
          </Box>
          <Box>
              <Typography variant='h6' component='h4'>
                Social Media & News
              </Typography>
          </Box>
        </Box>
      </Container>
      </Box>
      <Box >

      </Box>
    </>
  )
}

export default Footer
