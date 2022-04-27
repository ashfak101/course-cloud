import { Box, Container, Grid } from "@mui/material"
import CheckoutForm from "./CheckoutForm"
import CheckoutOrder from "./CheckoutOrder"


const Checkout = () => {
  return (
        <Box>
            <Container  maxWidth='xl'>
                <Box sx={{flexGrow:1,bgcolor:'#191C23',borderRadius:'10px',mb:5}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}><CheckoutForm/></Grid>
                        <Grid item xs={12} md={6}><CheckoutOrder/></Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>    
  )
}

export default Checkout