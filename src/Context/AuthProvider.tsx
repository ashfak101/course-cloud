import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

interface AppContextInterface {
    user: any;
    email: string;
    error: any;
    handleGoogleSignIn: any;
    handleFacebookSignIn: any;
    handleEmailChange: any,
    handlePasswordChange: any,
    handleRegistration: any,
    processLogin: any,
    handleResetPassword: any,
    registerNewUser: any,
    logOut: any,
    open: any,
    setOpen: any,
    registered: any;
    setRegistered: any;
  }

  const initialAuth:AppContextInterface ={
    user:{},
    email: "",
    error: "",
    handleGoogleSignIn: "",
    handleFacebookSignIn: "",
    handleEmailChange: "",
    handlePasswordChange: "",
    handleRegistration: "",
    processLogin: "",
    handleResetPassword: "",
    registerNewUser: "",
    logOut:"",
    open: "",
    setOpen: "",
    registered: "",
    setRegistered: ""
  }
  
  export const AuthContext = createContext<AppContextInterface>(initialAuth);
  type Props = {
      children: any;
    }
    const AuthProvider = (props:Props) => {
        const allContext:AppContextInterface = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;