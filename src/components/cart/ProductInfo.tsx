import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CoursesOnDeal } from '../../../types';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { CartState } from 'redux/reducers/cartReducer';
import { State } from 'redux/reducers';
import { addCertificate, removeFromCart } from 'redux/actions/cartAction';
type Props = {
    product: CoursesOnDeal
}

const ProductInfo = (props: Props) => {
    const { product } = props;
    const { numberOfCertificate }: CartState = useSelector((state: State) => state.allCartItem);
    const dispatch = useDispatch();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const deleteItem = (item: CoursesOnDeal) => {
        dispatch(removeFromCart(item.id));
        if (numberOfCertificate > 0)
            dispatch(addCertificate(numberOfCertificate - 1));
    };
    return (

        <Item sx={{ backgroundColor: "transparent", boxShadow: "0", border: "1px solid gray", borderRadius: '10px', mt: 2 }}>
            <Box sx={{ flexGrow: 1, }}>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', }}>
                    <Grid item xs={12} xl={4}>
                        <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                            <Image src={product.courseCover} width='158.23' height='118' alt='cartimage' />
                        </Item>
                    </Grid>
                    <Grid item xs={12} xl={8} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                            <Typography sx={{ fontFamily: "Lato", fontWeight: "400", fontSize: "15px", fontStyle: "normal", lineHeight: '145%', textAlign: 'left', color: 'white' }}>
                                {product.courseType}
                            </Typography>
                            <Typography sx={{ fontFamily: "Lato", fontWeight: "700", fontSize: "20px", fontStyle: "normal", lineHeight: '145%', textAlign: 'left', color: 'white' }}>
                                {product.title}
                            </Typography>
                            <Typography sx={{ fontFamily: "Lato", fontWeight: "500", fontSize: "20px", fontStyle: "normal", lineHeight: '115.4%', textAlign: 'left', color: '#E2B627', marginTop: '10px' }}>
                                £{product.mainPrice}
                            </Typography>
                        </Item>
                        <RiDeleteBin5Line style={{ color: 'red', fontSize: '20px' }} onClick={() => deleteItem(product)} />
                    </Grid>
                </Grid>
            </Box>
        </Item>
    );
};

export default ProductInfo;