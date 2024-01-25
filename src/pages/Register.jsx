import React from 'react';
import '../styles/Register.css';

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
            </form>
        </div>
    );
};

export default Register;