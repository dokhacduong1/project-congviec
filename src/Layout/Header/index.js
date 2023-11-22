import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss"
import { Button, Flex } from 'antd';
// import LogoutAndAdmin from "../../LogoutAndAdmin";

import { deleteAllCookies, getCookie } from "../../Helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../../Action/auth";



function Header(props) {
    const { collapsed, setCollapsed } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authenMain = useSelector((status) => status.authenticationReducer);
    const handleClick = ()=>{
        dispatch(authentication(false));
        deleteAllCookies();
        navigate("/login");
    }
    return (
        <>
            <header className='header'>
                <div className="container-fluid-test">
                    <div className="row">
                        <div className="header__logo col-6">

                            <NavLink className="mr-1" to={"/"}>CNTT2-K21</NavLink>
                        </div>
                        {
                            !authenMain ? (
                                <div className="header__boxUsers col-6">
                                    <div className="header__boxUsers-user">
                                        <NavLink className="mr-1" to={"/login"}>SIGN IN</NavLink>
                                        <div className="inner-dir "></div>
                                    </div>
                                    <div className="header__boxUsers-user">
                                        <NavLink className="ml-1" to={"/register"}>REGISTER</NavLink>
                                        <div className="inner-dir"></div>
                                    </div>
                                </div>
                            ):(
                                <div className="header__boxUsers col-6">
                                    <div className="header__boxUsers-user">
                                        <NavLink className="ml-1" to={"/login"} onClick={handleClick}>LOG OUT</NavLink>
                                        <div className="inner-dir"></div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </header>
        </>
    )
}
export default Header