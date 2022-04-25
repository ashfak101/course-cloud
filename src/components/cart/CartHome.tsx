import { Container, Box, Typography } from "@mui/material"
import CartOrder from "./CartOrder"


const CartHome = () => {
    return (
      <>  
        <Box sx={{ height: "211px", background: "#191C21" }}>
            <Container sx={{py:9}}>
                <Typography sx={{color:"#B2ADAD"}}>Home / MyCart</Typography>
                <Typography sx={{color:"#FBF4F4",fontFamily:"Lato",fontWeight:"700",fontSize:"30px"}}>MyCart</Typography>

            </Container>
        </Box>
        <CartOrder></CartOrder>
      </>  
    )
}

export default CartHome