import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login__wrapper'>
            <h1>Login</h1>
            <form>
                <input className='login__input' type='text' placeholder='email'/>
                <input className='login__input' type='text' placeholder='password'/>
                <div className='login__btn__wrapper'>
                    <button className='login__btn'>sign in</button>
                </div>
                <div className='login__btn__wrapper'>
                    <Link className="login__link" to="/register">register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;