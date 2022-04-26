import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CartOrder = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth='xl' >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={6}>
              <Item sx={{ backgroundColor: "transparent", boxShadow: "0", border: "1px solid gray", borderRadius: '10px' }}>
                <Box sx={{ flexGrow: 1, }}>
                  <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', }}>
                    <Grid item xs={12} xl={4}>
                      <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                        <Image src='/assets/images/cartone.png' width='158.23' height='118' alt='cartimage' />
                      </Item>
                    </Grid>
                    <Grid item xs={12} xl={8}>
                      <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                        <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: "20px", fontStyle: "normal", lineHeight: '145%', textAlign: 'left', color: 'white' }}>
                          Certificate in British Sign Language <br />
                          (BSL) Level 1 & 2
                        </Typography>
                        <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "20px", fontStyle: "normal", lineHeight: '115.4%', textAlign: 'left', color: '#E2B627', marginTop: '10px' }}>
                          £15.00
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Item sx={{ backgroundColor: "#282D37", boxShadow: "0", p: 5, borderRadius: '15px' }}>
                <Typography sx={{ fontFamily: "Lato", fontWeight: "600", fontSize: "30px", fontStyle: "normal", lineHeight: '42px', textAlign: 'left', color: 'white' }}>
                  Your Order
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4, color: '#FBF4F4' }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Product</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Subtotal</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4, color: '#FBF4F4',borderBottom:'0.568px solid #C6C6C6',pb:2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px',width:'350px' ,textAlign:'left'}}>Certificate in British Sign Language
                    (BSL) Level 1 & 2</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px', }}>	£15.00</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4, color: '#FBF4F4', borderBottom:'0.568px solid #C6C6C6',pb:2}}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Subtotal</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>	£35.00</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4, color: '#FBF4F4',borderBottom:'0.568px solid #C6C6C6',pb:2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Total</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>	£35.00</Typography>
                </Box>
                <Box>
                  
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CartOrder