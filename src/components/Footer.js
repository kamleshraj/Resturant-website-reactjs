import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

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
            </Typography>
          </Box>
          <Box>
              <Typography variant='h6' component='h4'>
                Menu 
              </Typography>
          </Box>
          <Box>
              <Typography variant='h6' component='h4'>
                Privacy Policy
              </Typography>
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
