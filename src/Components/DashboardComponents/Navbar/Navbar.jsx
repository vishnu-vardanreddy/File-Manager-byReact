import "./Navbar.css"


import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {signOutUser} from "../../../redux/actionCreators/authActionCreator";
const Navbar = () => {
    const {isAuthenticated ,user}= useSelector(state => state.auth);
    const dispatch = useDispatch();
    return (

        <nav className="navbar navbar-expand-lg navbar-dark shadow-lg p-2"style={{ backgroundColor: 'DarkOliveGreen' }}>
            <Link className="navbar-brand ms-5" to="/dashboard">Vodo File Manager</Link>
            <ul className="navbar-nav ms-auto me-5">
                {
                    isAuthenticated?(
                        <>
                        <li className="nav-item mx-2">
                        <p className="mhy-0 mt-2 mx-2">
                        <span className="text-light">Welcome, </span>
                        <span className="fw-bold">
                            {user.displayName}
                        </span>
                        </p>
                        </li>
                        <li className="nav-item mx-2">
                    <Link className="btn btn-primary " to="/dashboard">
                        Home
                    </Link>
                </li>
                <li className="nav-item ms-2">
                    <button className="btn btn-success " onClick={()=>dispatch(signOutUser())}>
                        Logout
                    </button>
                </li>
                        </>
                    )
                    :
                    (
                        <>
                        <li className="nav-item mx-2">
                    <Link className="btn btn-primary btn-sm" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item ms-2">
                    <Link className="btn btn-success btn-sm" to="/register">
                        Register
                    </Link>
                </li>
                        </>
                    )
                }
                
            </ul>
        </nav>
    );
};



export  default Navbar