import { Typography,Box } from "@mui/material"

const Title=(props)=>{
    return(
        <Box className="main-title" sx={{textAlign:'center'}}>
            <Typography variant="h6">
                {props.subtitle}
            </Typography>
            <Typography variant="h2">
                {props.title}
            </Typography>
        </Box>
    )
}

export default Title