import { Box, Typography } from "@mui/material"

const CheckoutOrder = () => {
  return (
   <Box sx={{m:8}}>
       <Box sx={{width:'600px',p:6,background: '#282D37',borderRadius:'10px'}}>
       <Typography sx={{color:'#FBDF4F4',fontSize:'30px',fontWeight:'600'}}>Your Order</Typography>
       <Box sx={{display:'flex',justifyContent:'space-between',mt:'27px',}}>
           <Typography >Product</Typography>
           <Typography>Subtotal</Typography>
       </Box>
       <Box sx={{display:'flex',justifyContent:'space-between',mt:'27px',borderBottom:' 1px solid #C6C6C6',pb:3}}>
           <Typography>Total</Typography>
           <Typography>	£35.00</Typography>
       </Box>
   </Box>
   </Box>
  )
}

export default CheckoutOrder