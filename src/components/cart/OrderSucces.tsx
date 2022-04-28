import { Box, Button, Container, Typography } from "@mui/material"
import CommonButton from "components/shared/buttons/CommonButton"
import Image from "next/image"
import Link from "next/link";
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
                        <Typography sx={{fontSize:'28px',fontWeight:'700',fontFamily:'Lato',my:'9px'}}>Your Order  is Successful</Typography>
                        <Typography sx={{fontSize:'16px',fontWeight:'400',fontFamily:'Lato',my:'9px',color:'#FBF4F4'}}>In purus donec ac in nulla lobortis. Lectus massa erat
                            odio turpis nulla sed.</Typography>
                            <Button sx={{background: '#D19F28',color:'#333','&:hover':{
                                color:'#333',background:'#FBDE44'
                            }}}><Link href='/'>Go Back Home</Link></Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default OrderSucces