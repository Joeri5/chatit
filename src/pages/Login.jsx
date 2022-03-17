import firebase from "firebase/compat";
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import Envelope from "../images/envelope.webp";

import { auth } from "../firebase";
import Navbar from "../components/Navbar";


const Login = () => {
    return (
        <div id="login-page">
            <Navbar />
           <div style={{display: "flex"}}>
               <div className="container-login-left">
                   <img src={Envelope} alt="envelope" className="image-login"/>
               </div>
               <div className="container-login-right">
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
                       {/*<div className="login-button">*/}
                       {/*    <TwitterLoginButton*/}
                       {/*        onClick={() => auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider())}*/}
                       {/*    />*/}
                       {/*</div>*/}
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Login