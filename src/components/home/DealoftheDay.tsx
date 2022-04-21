import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";
import CommonButton from "components/shared/buttons/CommonButton";
import { useEffect, useState } from "react";
import moment from "moment";
const Styles = {
    dealBackground: {
        backgroundImage: `url('/assets/images/dealbackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const DealoftheDay = () => {
    const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showSemicolon, setShowSemicolon] = useState(false);

    useEffect(() => {
		setInterval(() => {
			const now:any = moment();
			const then:any = moment('2020-10-15 12:12:12', 'YYYY-MM-DD hh:mm:ss');
			const countdown:any = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);
    return(
        <>
        <Box sx={{ ...Styles.dealBackground}}>
        <Container maxWidth="xl">
            <Box>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '700', fontSize:'36px', lineHeight:'43px', textAlign:'center', color:'white', marginBottom:'20px'}}>
                    Deal of The Day
                </Typography>
                <Typography sx={{fontFamily:'Lato', fontStyle:'normal', fontWeight: '400', fontSize:'18px', lineHeight:'29px', textAlign:'center', color: "white", marginBottom:'45px'}}>
                Vestibulum purus mus gravida ultrices consectetur <br/> morbi tomorbi faucibus ut eget nec tempor. 
                </Typography>
                <Box>
                <Box className="counter">
			<Box className="timer-container">
				<Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Box className="days">
					{days}
				</Box>
                <Box>
                    <Typography>Days</Typography>
                </Box>
                </Box>
				{showSemicolon ? <Box className="semicolon">:</Box> : null}
				<Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Box className="hours">
					{hours}
				</Box>
                <Box>
                    <Typography>Hours</Typography>
                </Box>
                </Box>
				{showSemicolon ? <Box className="semicolon">:</Box> : null}
				<Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Box className="minutes">
					{minutes}
				</Box>
                <Box>
                    <Typography sx={{marginLeft:'-20px !important'}}>Minutes</Typography>
                </Box>
                </Box>
				{showSemicolon ? <Box className="semicolon">:</Box> : null}
				<Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Box className="seconds">
					{seconds}
				</Box>
                <Box>
                    <Typography>Seconds</Typography>
                </Box>
                </Box>
			</Box>
		</Box>
                </Box>
            </Box>
        </Container>
        </Box>
        </>
    )
}
export default DealoftheDay;