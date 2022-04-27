import styled from "@emotion/styled";
import { Box, FormControl, InputBase, InputLabel, Typography } from "@mui/material"


const CheckoutForm = () => {
  const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: 20,
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'rgba(249, 249, 249, 0.05)',
      color: "#E4E4E4",
      border: '1px solid #ced4da',
      fontSize: 16,
      width: "450px",
      padding: '10px 12px',


      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),

    },
  }));
  return (
    <Box sx={{ p: 6 }}>
      <Typography sx={{ fontSize: '30px', color: '#E4E4E4', fontWeight: '600', my: 2 }}>Your Billing Details</Typography>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff", }} shrink htmlFor="Name-input">
          First Name
        </InputLabel>
        <CustomInput defaultValue="John" id="Name-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff", }} shrink htmlFor="Last-input">
          Last Name
        </InputLabel>
        <CustomInput defaultValue="Mathew" id="Last-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Email-input">
          Email
        </InputLabel>
        <CustomInput defaultValue="yourmail@anymail.com" id="Email-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Country-input">
          Country
        </InputLabel>
        <CustomInput defaultValue="United Kingdom" id="Country-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Street-input">
          Street Address
        </InputLabel>
        <CustomInput defaultValue="14 Cumberland Avenue" id="Street-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Town-input">
          Town/City
        </InputLabel>
        <CustomInput defaultValue="London" id="Town-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Post-input">
          Post Code
        </InputLabel>
        <CustomInput defaultValue="NW10 7QL" id="Name-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Phone-input">
          Phone
        </InputLabel>
        <CustomInput defaultValue="+00 123 456 789" id="Phone-input" />
      </FormControl>
      <FormControl variant="standard" sx={{ mt: 2 }}>
        <InputLabel sx={{ color: "#fff" }} shrink htmlFor="Course-input">
          Company (optional)
        </InputLabel>
        <CustomInput defaultValue="Course Cloud" id="Course-input" />
      </FormControl>

    </Box>
  )
}

export default CheckoutForm