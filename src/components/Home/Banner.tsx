import { Box, Container, Typography } from "@mui/material";
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

const Banner = () =>{
    return(
        <>
        <Box sx={{backgroundColor:'black'}}>
        <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={6} md={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4} xl={6} md={6}>
          {/* <Item>xs=4</Item> */}
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={5}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4} xl={7}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
        </Grid>
        <Grid item xs={4} xl={6} md={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8} xl={6} md={6}>
          {/* <Item>xs=8</Item> */}
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={7}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4} xl={5}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
        </Grid>
      </Grid>
    </Box>
        </Container>
        </Box>
        </>
    )
}
export default Banner;