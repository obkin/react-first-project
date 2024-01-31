import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UsersService from '../API/UsersService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputErrors, setInputErrors] = useState({ name: false, email: false, password: false });
    const [register, isRegisterLoading, registerError] = useFetching(async () => {
        if (name === '') {
            setInputErrors((prevErrors) => ({ ...prevErrors, name: true }));
        } else if (email === '') {
            setInputErrors((prevErrors) => ({ ...prevErrors, email: true }));
        } else if (password === '') {
            setInputErrors((prevErrors) => ({ ...prevErrors, password: true }));
        } else {
            const response = await UsersService.createUser(name, email, password);
            console.log(response);
        }
    });

    const createNewUser = async () => {
        // After a successful registration, you might want to redirect the user or perform other actions.
        // Example: history.push('/dashboard');
    };

    return (
        <div className='register__wrapper'>
            <h1>Registration</h1>
            <form>
                <input
                    className={`register__input ${inputErrors.name ? 'register__input__error' : ''}`}
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setInputErrors((prevErrors) => ({ ...prevErrors, name: false }));
                    }}
                />
                <input
                    className={`register__input ${inputErrors.email ? 'register__input__error' : ''}`}
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setInputErrors((prevErrors) => ({ ...prevErrors, email: false }));
                    }}
                />
                <input
                    className={`register__input ${inputErrors.password ? 'register__input__error' : ''}`}
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setInputErrors((prevErrors) => ({ ...prevErrors, password: false }));
                    }}
                />
                <div className='register__btn__wrapper'>
                    {isRegisterLoading ? (
                        <div className='register__btn__loader'>
                            <Loader />
                        </div>
                    ) : (
                        <button className='register__btn' type='button' onClick={() => {register()}}>
                            Register
                        </button>
                    )}
                </div>
                <div className='login__btn__wrapper'>
                    {!isRegisterLoading && <Link className="register__link" to="/login">Login</Link>}
                </div>
            </form>

            <div className='register__error'>

            </div>

        </div>
    );
};

export default Register;