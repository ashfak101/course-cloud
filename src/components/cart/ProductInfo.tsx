import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CoursesOnDeal } from '../../../types';
type Props = {
    product: CoursesOnDeal
}

const ProductInfo = (props: Props) => {
    const { product } = props;
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (

        <Item sx={{ backgroundColor: "transparent", boxShadow: "0", border: "1px solid gray", borderRadius: '10px', mt: 2 }}>
            <Box sx={{ flexGrow: 1, }}>
                <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', }}>
                    <Grid item xs={12} xl={4}>
                        <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                            <Image src={product.courseCover} width='158.23' height='118' alt='cartimage' />
                        </Item>
                    </Grid>
                    <Grid item xs={12} xl={8}>
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
                    </Grid>
                </Grid>
            </Box>
        </Item>
    );
};

export default ProductInfo;