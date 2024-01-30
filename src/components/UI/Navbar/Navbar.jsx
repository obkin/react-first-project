import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <Dropdown dropName={<FaUser size='20px' />}>
                <Link className='nav__item' to="/">Home</Link>
                <Link className='nav__item' to="/posts">Posts</Link>
                <Link className='nav__item' to="/register">Register</Link>
                <Link className='nav__item' to="/login">Login</Link>
            </Dropdown>
        </nav>
    );
};

export default Navbar;