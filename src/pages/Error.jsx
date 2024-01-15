import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>Such page is not exists</h1>
            <Link className="nav__item" to="/posts">Go back</Link>
        </div>
    );
};

export default Error;