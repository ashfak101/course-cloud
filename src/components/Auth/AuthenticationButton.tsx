import { Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type ButtonProps = {
    children: any ;
    backgroundColor: string;
    icon: any;
    onClick: any;
}

const AuthenticationButton = (props:ButtonProps) => {
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
                backgroundColor: props.backgroundColor
            }}
                onClick={props.onClick}
            >
                {props.icon &&
                    <Box sx={{ mr: 2 }}><Image src={props.icon} alt="" height="50px" width="50px" /></Box>
                }
                {props.children}
            </Button>
        </Box>
    );
};

export default AuthenticationButton;