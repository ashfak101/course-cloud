import { Avatar, Container, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BlogDetails = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography sx={{ textAlign: 'center', color: '#FFCF5E', backgroundColor: '#4B472A', borderRadius: '5px', width: '90px', height: '22px', marginLeft: '25px', marginTop: '61px', marginBottom: '10px' }}>
          Technology
        </Typography>
        <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '46px', lineHeight: '140%', marginLeft: '25px', marginBottom: '35px' }}>
          How to Pitch a Video Game: 7 Tips for <br /> Pitching Games
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ padding: '0px 0px' }}>
            <Grid item xs={12} xl={8} md={8}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                <Image src='/assets/images/blogdetail.png' width='930px' height='518px' />
              </Item>
            </Grid>
            <Grid item xs={12} xl={4} md={4}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                <Typography sx={{ textAlign: 'left', backgroundColor: '#21252D', padding: '19px 24px', borderRadius: '4px 4px 0px 0px', color: 'white', fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '20px', lineHeight: '140%' }}>Popular Blogs</Typography>
              </Item>
              <Grid item xs={12}>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                  <Box sx={{ flexGrow: 1, borderBottom: '1px solid #E2B62738' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} xl={4} md={5}>
                        <Item sx={{ backgroundColor: 'transparent', boxShadow: '0', textAlign: 'left' }}>
                          <Image src="/assets/images/popularblog.png" width='91px' height='91px' />
                        </Item>
                      </Grid>
                      <Grid item xs={6} xl={8} md={7}>
                        <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                          <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '18px', lineHeight: '140%', textAlign: 'left', color: 'white' }}>
                            Decide what type of teacher you want to be
                          </Typography>
                        </Item>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '150%', textAlign: 'left', color: '#8B8787' }}>August 10</Typography>
                              </Item>
                            </Grid>
                            <Grid item xs={6}>
                              <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '150%', textAlign: 'left', color: '#8B8787' }}>By Alan Bell</Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Avatar sx={{ marginLeft: '25px', marginTop: '44px' }} aria-label="recipe">
          <Image src="/assets/images/avatarone.png" width="44px" height="44px" alt="" />
        </Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={8}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '180%', textAlign: 'left', marginLeft: '25px', color: '#8B8787', marginTop: '31px' }}>
                  Teaching is a noble profession. Think about the most respected persons in our society. Yes, they are the teachers. If you ask someone about some of his favourite persons, it is most likely to find a teacher of him in his answer. So, being a teacher is an amazing thing. Besides, the career prospect in teaching is also lucrative. In England and Wales, as a Newly Qualified Teacher (NQT) you’ll earn  £24,373 to £30,480 depending on location  Since you have decided to become a teacher, you may be known to all of these.

                  Getting into teaching requires many years of preparation. If you don’t know how to become a teacher, you may find the way challenging. So, in this article, I’ll walk you through the steps to becoming a teacher in the UK.
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '22px', lineHeight: '140%', textAlign: 'left', marginLeft: '25px', marginTop: '40px', color: '#FBF4F4' }}>7 Steps to becoming a teacher</Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '180%', textAlign: 'left', marginLeft: '25px', color: '#8B8787', marginTop: '31px' }}>
                  Being a teacher is always exciting. It opens a new horizon for us to serve and build the nation in a noble way. In order to become a teacher, you have to undertake a number of steps. So let’s get started to explore:
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '22px', lineHeight: '140%', textAlign: 'left', marginLeft: '25px', marginTop: '40px', color: '#FBF4F4' }}>1. Decide what type of teacher you want to be</Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '180%', textAlign: 'left', marginLeft: '25px', color: '#8B8787', marginTop: '31px' }}>
                  Teachers can be of several types such as nursery teachers, school teachers, special teachers, professors and so on. So, before stepping into the route to become a teacher, decide first what type of teacher you want to be. In the UK, the education system is broadly divided into two systems. These are:

                  Primary Schools- Age 5 to 11 years
                  Secondary Schools- Age 11 to 16 years
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '22px', lineHeight: '140%', textAlign: 'left', marginLeft: '25px', marginTop: '40px', color: '#FBF4F4' }}>2. Decide your preferred subject</Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '180%', textAlign: 'left', marginLeft: '25px', color: '#8B8787', marginTop: '31px' }}>
                  In primary schools, you may be responsible for teaching multiple subjects. But in the secondary schools, it’s most likely that you’ll be teaching the subject in which you did your major. So, it’s your choice which subject do you want to teach. It’s necessary to decide this because it will keep you on the track to become a teacher and step forward to make your preparation.
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '700', fontSize: '22px', lineHeight: '140%', textAlign: 'left', marginLeft: '25px', marginTop: '40px', color: '#FBF4F4' }}>3. Earn your bachelor degree</Typography>
                <Typography sx={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '400', fontSize: '20px', lineHeight: '180%', textAlign: 'left', marginLeft: '25px', color: '#8B8787', marginTop: '31px' }}>
                  Unlike many other professions, teaching is very strict in its requirements. It’s because we don’t want to give the responsibility of educating our children to someone who doesn’t have the proper education and credentials. So, getting into teaching requires a minimum degree in the first place. After that, the other things come. You need a bachelor degree to become a teacher. There are also other specialized and advanced degrees, but you need your bachelor degree before everything.

                  If you want to be a primary teacher, then you’ll need a degree of Bachelor of Education (BEd.) But, if you want to be a secondary teacher, you have to do your bachelor in your preferred subject. Your major in your degree will determine which subject you’ll be teaching. Earning a bachelor degree will require 3 to 4 years. However, if you want to be a nursery or pre-school teacher, you don’t need a bachelor degree rather a proper license and certification in teaching children.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
export default BlogDetails;