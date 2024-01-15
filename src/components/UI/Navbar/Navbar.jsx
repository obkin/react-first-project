import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link className="nav__item" to="/">Home</Link>
            <Link className="nav__item" to="/posts">Posts</Link>
        </nav>
    );
};

export default Navbar;