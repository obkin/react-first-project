import React from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register__wrapper'>
            <h1>Registration</h1>
            <form>
                <input className='register__input' type='text' placeholder='name'/>
                <input className='register__input' type='text' placeholder='email'/>
                <input className='register__input' type='text' placeholder='password'/>
                <div className='register__btn__wrapper'>
                    <button className='register__btn'>register</button>
                </div>
                <div className='login__btn__wrapper'>
                    <Link className="register__link" to="/login">login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;