import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, TextField, Typography } from '@mui/material';

import { State } from 'redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import ProductInfo from './ProductInfo';
import { CartState } from 'redux/reducers/cartReducer';
import { addCoupon, addSubTotal, addTotal } from 'redux/actions/cartAction';
import { ToastContainer, toast } from 'react-toastify';
import ClearIcon from "@mui/icons-material/Clear";
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

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
type Props = {
  handleNext: () => void
}
const CartOrder = (props: Props) => {

  const [coupon, setCoupon] = React.useState('');
  const [error, setError] = React.useState('')

  const { cart,
    subTotal,
    total,
    disCountPrice,
    cuponUsed, certificatePrice }: CartState = useSelector((state: State) => state.allCartItem);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success('Coupon added', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDiscount = (e: any) => {
    e.preventDefault();
    if (coupon === "50discount") {
      dispatch(addTotal(subTotal / 2));
      dispatch(addCoupon(true));
      notify();

    }
    /* else if (coupon === "sports") {
      // dispatch(decreaseItemPrice("sports"))
      let newSubTotal = 0;
      cart.forEach(item => {
        newSubTotal += parseFloat(item.mainPrice);
        dispatch(addSubTotal(newSubTotal));
        dispatch(addTotal(newSubTotal));
      })

      dispatch(addCoupon(true));
      notify();

    } */
    else if (coupon === "offer") {
      dispatch(addTotal(subTotal - 500));
      dispatch(addCoupon(true));
      notify();

    }
    else if (coupon === "") {
      setError("Enter a Coupon code");
    } else {
      setError("Wrong Code");
    }
  };

  const cancelCoupon = () => {

    if (coupon == 'sports') {
      // dispatch(decreaseItemPrice('sports'));
      let newSubTotal = 0;
      cart.forEach(item => {
        newSubTotal += parseFloat(item.mainPrice);
        dispatch(addSubTotal(newSubTotal));
        dispatch(addTotal(subTotal));
      })
      return;
    }
    dispatch(addTotal(subTotal));
    dispatch(addCoupon(false));


  }

  const handleCouponChange = (e: any) => {
    setCoupon(e.target.value);
  };

  setTimeout(() => {
    setError("");
  }, 3000)

  return (
    <Box sx={{ mt: 10, mb: 10 }}>
      <Container maxWidth='xl' >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={6}>
              {
                cart.map((item) => (
                  <ProductInfo key={item?.id} product={item} />
                ))
              }
              <>
                <Box sx={{ flexGrow: 1, }}>
                  <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', }}>
                    <Grid item xs={12} xl={4}>
                      <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                        <Image src='/assets/images/digital-certificate.png' width='158.23' height='118' alt='certificate' />
                      </Item>
                    </Grid>
                    <Grid item xs={12} xl={8}>
                      <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                        <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "15px", fontStyle: "normal", lineHeight: '145%', textAlign: 'left', color: 'white' }}>

                        </Typography>
                        <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: "20px", fontStyle: "normal", lineHeight: '145%', textAlign: 'left', color: 'white' }}>
                          Digital Certificate
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "20px", fontStyle: "normal", lineHeight: '115.4%', textAlign: 'left', color: '#E2B627', marginTop: '10px' }}>
                            £{5.66 * cart.length}
                          </Typography>
                          <Box>
                            <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "20px", fontStyle: "normal", lineHeight: '115.4%', textAlign: 'left', color: 'white', marginTop: '10px', ml: 5 }}>
                              x{cart.length}
                            </Typography>
                          </Box>

                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </>
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
                  <Typography sx={{ fontWeight: '600', fontSize: '20px', width: '350px', textAlign: 'left' }}>Digital Certificate</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px', }}>	£{certificatePrice * cart.length}</Typography>
                </Box>
                <Box sx={Styles.cart}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Subtotal</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>	£{subTotal}</Typography>
                </Box>
                <Box sx={Styles.cart}>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Total</Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>	£{total}</Typography>
                </Box>
                <Box>
                  <form onSubmit={handleDiscount}>
                    <CssTextField sx={{ background: "#fff", borderRadius: '5px' }} id="outlined-basic" placeholder='Enter Cupon' variant="outlined" onBlur={handleCouponChange} />
                    <Button type='submit' variant='contained' sx={{
                      fontSize: '15px'
                      , color: '#191C21',
                      bgcolor: '#D19F28', p: "15px 25px", borderRadius: '0 5px 5px 0',
                      ml: '-2px',
                      "&:hover": {
                        bgcolor: '#FBDE44'
                      }
                    }}
                      disabled={cuponUsed}
                    >Apply</Button>
                  </form>

                  {
                    error && <Container sx={{ margin: '5px 0' }}> <Alert severity="error">{error}</Alert> </Container>
                  }
                  {cuponUsed && (
                    <Typography
                      sx={{ color: "white", display: "flex", alignItems: "center" }}
                    >
                      {coupon} <ClearIcon onClick={cancelCoupon} />
                    </Typography>
                  )}
                  <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <Button sx={{
                    fontSize: '15px'
                    , color: '#191C21',
                    bgcolor: '#D19F28',
                    p: "15px 65px",
                    mt: 2,
                    "&:hover": {
                      bgcolor: '#FBDE44'
                    }
                  }} onClick={props.handleNext}>Proceed To Checkout</Button>
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