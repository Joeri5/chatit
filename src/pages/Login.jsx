import firebase from "firebase/compat";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import Envelope from "../images/envelope.webp";

import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import {useRef, useState} from "react";

const LoginModal = ({ toggle }) => {
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();

    function login(e) {
        e.preventDefault();

         signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .catch(e => {
                console.log(e.message)
            })
    }

    return (
        <form onSubmit={login} autoComplete="off" className="flex flex-col">
            <input type="email" onChange={e => setEmailInput(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={e => setPasswordInput(e.target.value)} placeholder="Password"/>
            <div className="space-x-2">
                <button type="submit" className="p-2 bg-blue-400">
                    Login
                </button>
                <button onClick={toggle}>
                    Don't have an account?
                </button>
            </div>
        </form>
    )
}

const RegisterModal = ({ toggle }) => {
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();

    function createAccount(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
            .catch(e => {
                console.log(e.message)
            })
    }

    return (
        <form onSubmit={createAccount} autoComplete="off" className="flex flex-col">
            <input type="email" onChange={e => setEmailInput(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={e => setPasswordInput(e.target.value)} placeholder="Password"/>
            <div className="space-x-2">
                <button type="submit" className="p-2 bg-blue-400">
                    Signup
                </button>
                <button onClick={toggle}>
                    Already have an account?
                </button>
            </div>
        </form>
    )
}

const Login = () => {
    const [showLogin, setShowLogin] = useState(true);
    function toggleShowLogin() {
        setShowLogin(!showLogin)
    }

    return (
        <div id="login-page">
            <Navbar />
           <div style={{display: "flex"}}>
               <div className="container-login-left">
                   <img src={Envelope} alt="envelope" className="image-login"/>
               </div>
               <div className="container-login-right">
                   <div className="flex flex-col w-5/6">
                       {showLogin ? <LoginModal toggle={toggleShowLogin}/> : <RegisterModal toggle={toggleShowLogin}/>}
                   </div>
                   <div id="login-card">
                       <div className="login-button">
                           <GoogleLoginButton
                               onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                           />
                       </div>
                       <div className="login-button">
                           <GithubLoginButton
                               onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                           />
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Login