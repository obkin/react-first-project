import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../context/context';

const Navbar = () => {
    const {isUserAuthorized, setIsUserAuthorized} = useContext(AuthContext);

    return (
        <nav>
            {isUserAuthorized
                ?
                <Dropdown dropName={<FaUser size='20px' />}>
                    <Link className='nav__item' to="/">Home</Link>
                    <Link className='nav__item' to="/user-posts">My posts</Link>
                    <Link className='nav__item' onClick={() => {setIsUserAuthorized(false)}} to="/login">Log out</Link>
                </Dropdown>
                :
                <Dropdown dropName={<FaUser size='20px' />}>
                    <Link className='nav__item' to="/register">Register</Link>
                    <Link className='nav__item' to="/login">Login</Link>
                </Dropdown>
            }
        </nav>
    );
};

export default Navbar;