import { Box, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CheckoutOrder = () => {
    return (
        <Box sx={{ m: 8 }}>
            <Box sx={{ width: '600px', p: 6, background: '#282D37', borderRadius: '10px' }}>
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
                        <Grid item xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default CheckoutOrder