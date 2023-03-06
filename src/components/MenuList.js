import { Card, CardActionArea, CardContent,CardMedia,Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MenuData } from '../data/data'

const MenuItems = () => {
    return (
        <>
        <Box className='menu-list' sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {MenuData.map((menu) => {
              return (
                <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                    <CardActionArea>
                     
                      <CardMedia
                        sx={{ minHeight: "400px" }}
                        component={"img"}
                        src={menu.image}
                        alt={menu.name}
                      />
                     <CardContent>
                     <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                      <Typography variant='body2' component={"div"}>
                        {menu.description}
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
              )
            })}
            </Box>
            </>
    )
}

export default MenuItems