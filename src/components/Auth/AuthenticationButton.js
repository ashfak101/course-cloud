import { Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const AuthenticationButton = ({ children, backgroundColor, icon, onClick }) => {
    return (
        <Box>
            <Button variant="contained" sx={{
                width: '100%', fontWeight: 600,
                fontSize: '12px',
                lineHeight: '71.5%',
                textTransform: 'uppercase',
                color: '#FBF4F4',
                borderRadius: '5px',
                mt: 3,
                py: '21px',
                backgroundColor: backgroundColor
            }}
                onClick={onClick}
            >
                {icon &&
                    <Box sx={{ mr: 2 }}><Image src={icon} alt="" height="50px" width="50px" /></Box>
                }
                {children}
            </Button>
        </Box>
    );
};

export default AuthenticationButton;