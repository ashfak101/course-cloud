import { Box, Button, Container, Typography } from "@mui/material"
import CommonButton from "components/shared/buttons/CommonButton"
import Image from "next/image"
const Styles = {
    cartBackground: {
      backgroundImage: `url('/assets/images/orderSuccess.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
  };

const OrderSucces = () => {
    return (
        <Box>
            <Container maxWidth='xl'>
                <Box sx={{ ...Styles.cartBackground }}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:"500px"}}>
                        <Image src='/assets/images/Right.png' alt="right" width='97px' height='97px' />
                        <Typography>Your Order  is Successful</Typography>
                        <Typography>In purus donec ac in nulla lobortis. Lectus massa erat
                            odio turpis nulla sed.</Typography>
                            <Button>Go Back Home</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default OrderSucces