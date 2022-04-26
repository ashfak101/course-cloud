import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';

import { State } from 'redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import ProductInfo from './ProductInfo';
import { CartState } from 'redux/reducers/cartReducer';
import { addSubTotal } from 'redux/actions/cartAction';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#333',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#999',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'linear-gradient(to right, #232526 0%, #414340  56%, #232526  100%)',
    },
    '&:hover fieldset': {
      borderColor: 'linear-gradient(to right, #232526 0%, #414340  76%, #232526  100%)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333',
    },
  },
});

const Styles = {
  cart: {
    display: 'flex', justifyContent: 'space-between', my: 4, color: '#FBF4F4', borderBottom: '0.568px solid #C6C6C6', pb: 2
  }
}
const CartOrder = () => {
  const { cart, subTotal, total, disCountPrice, cuponUsed }: CartState = useSelector((state: State) => state.allCartItem);
  const dispatch = useDispatch();
  let primaryTotal: number = 0;

  let finalTotal: number = 0;
  /* React.useEffect(() => {
    cart?.forEach((item) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      primaryTotal = primaryTotal + parseFloat(item.mainPrice)
      dispatch(addSubTotal(primaryTotal));
      console.log(primaryTotal, item.mainPrice)
    });

  }, [cart]); */

  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth='xl' >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={6}>
              {
                cart.map((item) => (
                  <ProductInfo key={item.id} product={item} />
                ))
              }
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
                {
                  cart.map((item) => (
                    <Box sx={Styles.cart} key={item.id}>
                      <Typography sx={{ fontWeight: '600', fontSize: '20px', width: '350px', textAlign: 'left' }}>{item.title}</Typography>
                      <Typography sx={{ fontWeight: '600', fontSize: '20px', }}>	£{item.mainPrice}</Typography>
                    </Box>
                  ))
                }
                <Box sx={Styles.cart}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Subtotal</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>	£{subTotal}</Typography>
                </Box>
                <Box sx={Styles.cart}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Total</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>	£35.00</Typography>
                </Box>
                <Box>
                  <form>
                    <CssTextField sx={{ background: "#fff", borderRadius: '5px' }} id="outlined-basic" placeholder='Enter Cupon' variant="outlined" />
                    <Button type='submit' variant='contained' sx={{
                      fontSize: '15px'
                      , color: '#191C21',
                      bgcolor: '#D19F28', p: "15px 25px", borderRadius: '0 5px 5px 0',
                      ml: '-2px',
                      "&:hover": {
                        bgcolor: '#FBDE44'
                      }
                    }}>Apply</Button>
                  </form>
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