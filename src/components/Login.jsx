import { GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/compat";
import GoogleButton from 'react-google-button';
import GithubButton from 'react-github-login-button'

import { auth } from "../firebase";
import Navbar from "./Navbar";

const Login = () => {
    return (
        <div id="login-page">
            <Navbar />
            <div id="login-card">
                <h2>Welcome to ChatIt</h2>
                <div className="login-button">
                    <GoogleButton
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    />
                </div>
                <div className="login-button">
                    <GithubButton
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login