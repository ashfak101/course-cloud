import { Box, Container, Grid } from "@mui/material"
import CheckoutForm from "./CheckoutForm"


const Checkout = () => {
  return (
        <Box sx={{mt:10}}>
            <Container  maxWidth='xl'>
                <Box sx={{flexGrow:1,bgcolor:'#191C23',borderRadius:'10px',}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}><CheckoutForm/></Grid>
                        <Grid item xs={12} md={6}><CheckoutForm/></Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>    
  )
}

export default Checkout