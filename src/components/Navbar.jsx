import {auth} from "../firebase";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import {useState} from "react";

function Navbar (){
    const history = useHistory();
    const { user } = useAuth();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/home');
    }

    if(!user) return (
        <div className="nav-bar">
            <Link
                to="/home"
                className="logo-tab">
                ChatIt
            </Link>
            <Link
                to="/login"
                className="logout-tab">
                Login
            </Link>
        </div>
    );

    if (user) return (
        <div className="nav-bar">
            <Link
                to="/home"
                className="logo-tab">
                ChatIt
            </Link>
            <div onClick={handleLogout} className="logout-tab">
                Logout
            </div>
        </div>
    );

    // return (
    //
    // )
}

export default Navbar;