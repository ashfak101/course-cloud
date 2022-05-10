import { Box, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
// import { AiOutlineClose } from "react-icons/ai";
import AuthenticationButton from './AuthenticationButton';
import useAuth from 'hooks/useAuth';

const Styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'background.paper',
        background: '#FFFFFF',
        borderRadius: '2px',
        boxShadow: 24,
        p: 4,
        width: { sm: '400px', xs: '100%' },
    },
    form: {
        width: '100%',
        border: '1px solid #767676',
        boxSizing: 'border-box',
        borderRadius: '5px'

    },
    label: {
        fontWeight: 600,
        fontSize: '12px',
        color: '#494949',
        mb: 1,
    }
}

type ModalProps = {
    handleClose: () => void;
    open: boolean;
}


const LoginModal = (props: ModalProps) => {
    const { handleGoogleSignIn, handleFacebookSignIn, registered, setRegistered, open, handleEmailChange,
        handlePasswordChange,
        handleRegistration, } = useAuth();
    const [isFunction, setFunction] = useState(false);
    // console.log(handleGoogleSignIn);
    // console.log(typeof (handleGoogleSignIn))

    useEffect(() => {
        if (typeof (handleGoogleSignIn) === 'function') {
            setFunction(true);
        }
    }, [handleGoogleSignIn])

    return (


        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ position: 'absolute' }}
        >

            <Box sx={Styles.modal}>
                <CloseIcon onClick={props.handleClose}
                    style={{
                        position: 'absolute',
                        top: 16, right: 16,
                        backgroundColor: '#F8F8F8',
                        padding: 2,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        color: 'black',
                        transition: '.5s',
                    }} />
                <Box sx={{ my: 5 }}>
                    <Typography id="modal-modal-title" sx={{
                        fontWeight: 'bold',
                        fontSize: '24px',
                        textAlign: 'center',
                        color: 'black'
                    }}>
                        {registered ? 'Log In' : 'Sign Up'}

                    </Typography>
                    {isFunction &&
                        <AuthenticationButton onClick={handleGoogleSignIn} backgroundColor='#4688F1' icon='/assets/images/google-icon.png' >Log In With Google</AuthenticationButton>
                    }

                    <AuthenticationButton backgroundColor='#3E5C97' icon='/assets/images/facebook-icon.png' onClick={handleFacebookSignIn}>Log In With Facebook</AuthenticationButton>
                    <Box sx={{ mt: '100px', mb: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <hr style={{ width: '40%' }} /> <span style={{
                            fontWeight: 600,
                            fontSize: '12px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#767676'
                        }}>OR</span> <hr style={{ width: '40%' }} />
                    </Box>
                    <Box>
                        <Typography sx={Styles.label}>Email</Typography>
                        <TextField onBlur={handleEmailChange} variant="outlined" type="text" sx={Styles.form} />

                        <Typography sx={Styles.label}>Password</Typography>
                        <TextField onBlur={handlePasswordChange} variant="outlined" type='password' sx={Styles.form} />
                        <AuthenticationButton onClick={handleRegistration} backgroundColor='#C63437' icon="" >{registered ? 'Log In' : 'Sign Up'}</AuthenticationButton>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '16px',
                            lineHeight: '71.5%',
                            textAlign: 'center',
                            color: '#494949',
                            pt: '10px'
                        }}>
                            {registered ? 'Need an account?' : 'Already Have Account?'} <Box component="span" onClick={registered ? () => setRegistered(false) : () => setRegistered(true)} sx={{ textDecoration: 'underline', cursor: 'pointer' }}>{registered ? 'Sign up.' : 'Sign In'}</Box>
                        </Typography>

                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: '12px',
                            textAlign: 'center',
                            textDecoration: 'underline',
                            color: '#767676',
                            mt: '10px'
                        }}>
                            Forgot your password?
                        </Typography>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: '12px',
                            textAlign: 'center',
                            color: '#767676',
                            mt: '10px'
                        }}>
                            By logging in, you agree to our
                        </Typography>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: '12px',
                            textAlign: 'center',
                            textDecoration: 'underline',
                            color: '#767676',
                            mt: '10px'
                        }}>
                            Privacy Policy <span style={{ textDecoration: 'none' }}>and</span> Terms od Service.
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Modal>
    );
};

export default LoginModal;