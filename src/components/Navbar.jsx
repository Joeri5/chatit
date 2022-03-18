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
                className="logo-tab ml-10">
                Chat<span style={{color: "#1890ff"}}>It</span>
            </Link>
            <div className="flex justify-end w-full">
                <Link
                    to="/login"
                    className="logout-tab mr-10"
                >
                    Login
                </Link>
            </div>
        </div>
    );

    if (user) return (
        <div className="nav-bar shadow-md">
            <Link
                to="/home"
                className="logo-tab ml-10">
                Chat<span style={{color: "#1890ff"}}>It</span>
            </Link>
            <div className="flex justify-end w-full">
                <Link onClick={handleLogout} className="logout-tab mr-10">
                    Logout
                </Link>
            </div>
        </div>
    );

    // return (
    //
    // )
}

export default Navbar;