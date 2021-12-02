import React from "react";
import "./Login.css";
import {logIn} from "../features/userSlice";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
import {useDispatch} from "react-redux";

const Login=()=> {
    const dispatch = useDispatch();

    const signIn = () => {
         auth
             .signInWithPopup(provider)
             .then(({user}) => {
                 dispatch(logIn({
                    displayName: user.displayName,
                     email: user.email,
                     photoURL: user.photoURL
                 }))
             })
             .catch((error)=> alert(error.message))
    };

    return (
        <div className='login'>

            <div className="login__container">
                <img
                    // src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png"
                    src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
                    alt=""
                />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}
export default Login;