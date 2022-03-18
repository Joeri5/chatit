import firebase from "firebase/compat";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import Envelope from "../images/envelope.webp";
import 'material-icons/iconfont/material-icons.css';
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import { useState} from "react";
import GoogleIcon from '../images/google.svg'

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
            <label>Email</label>
            <input type="email" onChange={e => setEmailInput(e.target.value)} placeholder="Enter your email" className="border-2 rounded-lg h-10"/>
            <label>Password</label>
            <input type="password" onChange={e => setPasswordInput(e.target.value)} placeholder="Password" className="border-2 rounded-lg h-10"/>
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
               <div className="container-login-right w-full">
                   <div className="flex flex-col w-4/5">
                       {showLogin ? <LoginModal toggle={toggleShowLogin}/> : <RegisterModal toggle={toggleShowLogin}/>}
                   </div>
                   <div id="login-card" className="flex justify-center w-4/5">
                       <div className="login-button">
                           <button
                               onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                               className="flex text-center w-full text-xl border-2 justify-center"
                           >
                               <img src={GoogleIcon} alt="google" className="w-6 mr-2"/> Sign in Google
                           </button>
                       </div>
                       <div className="login-button">
                           {/*<GithubButton*/}
                           {/*    onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}*/}
                           {/*    style={{ background: "#002766" }}*/}
                           {/*>*/}
                           {/*</GithubButton>*/}
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Login