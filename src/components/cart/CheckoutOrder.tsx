import { Box, Checkbox, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CheckoutOrder = () => {
    return (
        <Box sx={{
            my: 10, width: {
                xs: '100%',
                md: '80%'
            }
        }}>
            <Box sx={{ p: 6, background: '#282D37', borderRadius: '10px' }}>
                <Typography sx={{ color: '#FBDF4F4', fontSize: '30px', fontWeight: '600' }}>Your Order</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '27px', }}>
                    <Typography >Product</Typography>
                    <Typography>Subtotal</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '27px', borderBottom: ' 1px solid #C6C6C6', pb: 3 }}>
                    <Typography>Total</Typography>
                    <Typography>	£35.00</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item sx={{ backgroundColor: '#333845', borderRadius: '10px' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} xl={12} md={12}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ textAlign: 'left', color: 'white' }}>Paypal</Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={4} xl={6} md={6}>
                                            <Item sx={{ display: "flex", alignItems: "center", backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Checkbox defaultChecked />
                                                <Image src="/assets/images/paypalcard.png" width="48px" height="32px" />
                                            </Item>
                                        </Grid>
                                        <Grid item xs={4} xl={6} md={6}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ textAlign: 'right', color: 'white' }}>
                                                    What Is Paypal?
                                                </Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ textAlign: 'left', color: 'white' }}>Debit or Credit Card</Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={12}>
                                            <Item sx={{ display: "flex", alignItems: "center", backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Checkbox defaultChecked />
                                                <span style={{ marginRight: '10px' }}><Image src="/assets/images/visacard.png" width="48px" height="32px" /></span>
                                                <span style={{ marginRight: '10px' }}><Image src="/assets/images/mastercard.png" width="48px" height="32px" /></span>
                                                <span style={{ marginRight: '10px' }}><Image src="/assets/images/masterocard.png" width="48px" height="32px" /></span>
                                                <span style={{ marginRight: '10px' }}><Image src="/assets/images/americanexpress.png" width="48px" height="32px" /></span>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={12}>
                                            <Item sx={{ display: "flex", alignItems: "center", backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Checkbox defaultChecked />
                                                <Typography sx={{ textAlign: 'left', color: 'white' }}>I have read and agree to the website <br />
                                                    terms and conditions *</Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={12}>
                                            <CommonButton textValue="PAY NOW" fontSize="1rem" onClick={() => alert("hello")} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Box>
    )
}

export default CheckoutOrder