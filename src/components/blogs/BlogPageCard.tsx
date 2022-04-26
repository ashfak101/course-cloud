import { styled } from '@mui/material/styles';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const BlogPageCard = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{ width: '1170px', height: '100%', backgroundColor: '#21252D', display: 'flex', alignItems: 'center', justifyContent: "center", borderRadius: '10px', marginTop: '52px', padding: '20px 20px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} xl={4} md={4}>
                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} xl={12} md={12}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Image src="/assets/images/blogone.png" width={366} height={278} alt="" />
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={8} md={8}>
                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={10} xl={10} md={10}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ textAlign: 'left', color: 'white' }}>
                                                    How to Pitch a Video Game: 7 Tips for Pitching <br /> Games
                                                </Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={2} md={2}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ textAlign: 'center', color: '#FFCF5E', backgroundColor: '#4B472A', borderRadius: '5px' }}>
                                                    Technology
                                                </Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={3} md={3}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ color: 'white', textAlign: 'left' }}>
                                                    Augest 10th, 2020
                                                </Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={2} xl={1}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0', textAlign: 'left' }}>
                                                <Image src="/assets/images/blogauthor.png" width={27} height={27} alt="" />
                                            </Item>
                                        </Grid>
                                        <Grid item xs={4} xl={2}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ color: 'white', textAlign: 'left' }}>
                                                    By Alan Bell
                                                </Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Typography sx={{ textAlign: 'left', color: 'white' }}>
                                                    Certificate in British Sign Language Course Overview If you want to broad up your experiences and development in communication throug, If you want to broad up your experiences and development in communication through…
                                                </Typography>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Item sx={{ textAlign: 'left', backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Button sx={{ border: '1px solid #CE9D28', width: '154px', height: '40px', color: '#CE9D28' }}>
                                                    READ MORE
                                                </Button>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0', marginTop: '3px' }}>
                                                <Image src="/assets/images/saved.png" width={21} height={26} alt="" />
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogPageCard;