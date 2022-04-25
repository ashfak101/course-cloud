import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut,
    getAuth,
    FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState<object>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [registered, setRegistered] = useState<boolean>(true)
    const auth = getAuth();

    //google sign in
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error.message);
                if (error) {
                    alert(error);
                }

            })
            .finally(() => {
                setOpen(false)
                setError('');
            });
    };

    const handleFacebookSignIn = () => {
        setIsLoading(true);
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
            .catch((error) => {
                setError("Firebase Popup Closed By User Try Again!");
            })
            .finally(() => setIsLoading(false));
    }
    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e:any) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be at least 6 characters");

            alert(error);
            return;
        }
        registered ? processLogin(email, password) : registerNewUser(email, password);
    };

    const processLogin = (email:string, password:string) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
                if (error) {
                    alert(error);
                }
            })
            .finally(() => {
                window.location.reload();
            });
    };

    const registerNewUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
          
            })
            .catch((error) => {
                setError(error.message);
                setError(error.message);
                if (error) {
                    alert(error);
                }
            })
            .finally(() => {
                window.location.reload();
            });
    };
  
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                setError("Password reset link sent to email.");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // const toggleLogin = (e) => {
    //     setIsLogin(e.target.checked);
    // };
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    //observe user state change
    useEffect(() => {
        const unsubscribed : any = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    return {
        user,
        email,
        error,
        handleGoogleSignIn,
        handleFacebookSignIn,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processLogin,
        handleResetPassword,
        registerNewUser,
        logOut,
        open,
        setOpen,
        registered, setRegistered
    };
};

export default useFirebase;
