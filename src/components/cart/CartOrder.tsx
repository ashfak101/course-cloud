import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#282D37',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  
    color: theme.palette.text.secondary,
}));
const CartOrder = () => {
    return (
        <Box>
            <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{p:'19px 32px'}}>
                        <Typography variant='h4' sx={{fontFamily:"sofia Pro",fontWeight:"600",fontSize:"30px",color:"#fff"}}>Your Order</Typography>
                        <Box>
                            <Box sx={{display:"flex",justifyContent:'space-between'}}>
                                <Typography>Product</Typography>
                                <Typography>Subtotal</Typography>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}

export default CartOrder