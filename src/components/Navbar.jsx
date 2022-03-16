import {auth} from "../firebase";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

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
                Chat<span style={{color: "#1890ff"}}>It</span>
            </Link>
            <Link
                to="/login"
                className="logout-tab">
                Login
            </Link>
        </div>
    );

    if (user) return (
        <div className="nav-bar shadow-md">
            <Link
                to="/home"
                className="logo-tab">
                Chat<span style={{color: "red"}}>It</span>
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