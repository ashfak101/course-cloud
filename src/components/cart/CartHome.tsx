import { Container, Box, Typography } from "@mui/material"
import CartOrder from "./CartOrder"
import Checkout from "./Checkout";
const Styles = {
  cartBackground: {
    backgroundImage: `url('/assets/images/cartheader.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
};


const CartHome = () => {
  return (
    <>
      <Box sx={{ ...Styles.cartBackground }}>
        <Container maxWidth="xl" sx={{ py: 9 }}>
          <Typography sx={{ color: "#B2ADAD" }}>Home / MyCart</Typography>
          <Typography sx={{ color: "#FBF4F4", fontFamily: "Lato", fontWeight: "700", fontSize: "30px" }}>MyCart</Typography>

        </Container>
      </Box>
      {/* <CartOrder></CartOrder> */}
      <Checkout/>
    </>
  )
}

export default CartHome