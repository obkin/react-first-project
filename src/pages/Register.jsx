import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsersService from '../API/UsersService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/buttons/MyButton';
import '../styles/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [inputErrors, setInputErrors] = useState({ name: false, email: false, password: false });
    const [modal, setModal] = useState(false);
    const [serverError, setServerError] = useState(null);

    const [register, isRegisterLoading] = useFetching(async () => {
        if (name === '' || containsDigits(name)) {
            setInputErrors((prevErrors) => ({ ...prevErrors, name: true }));
        } else if (email === '') {
            setInputErrors((prevErrors) => ({ ...prevErrors, email: true }));
        } else if (password === '' || password.length < 8) {
            setInputErrors((prevErrors) => ({ ...prevErrors, password: true }));
        } else {
            setServerError(null);
            try {
                await UsersService.createUser(name, email, password);
                setModal(true);
                setName('');
                setEmail('');
                setPassword('');
            } catch (e) {
                setServerError(e.response.status);
                setModal(true);
            }
        }
    });

    const containsDigits = (str) => /\d/.test(str);

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='register__wrapper'>
            <h1 className='register__header'>Registration</h1>
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
                    type='email'
                    placeholder='email'
                    autoComplete='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setInputErrors((prevErrors) => ({ ...prevErrors, email: false }));
                    }}
                />
                <div className='register__input__password'>
                    <input
                        className={`register__input ${inputErrors.password ? 'register__input__error' : ''}`}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password (min 8 char)'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setInputErrors((prevErrors) => ({ ...prevErrors, password: false }));
                        }}
                    />
                    <input 
                        className='register__input__password__checkbox'
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className='register__btn__wrapper'>
                    {isRegisterLoading 
                        ? (
                            <div className='register__btn__loader'>
                                <Loader />
                            </div>
                        ) : (
                            <button className='register__btn' type='button' onClick={() => {register()}}>
                                Register
                            </button>
                        )
                    }
                </div>
                <div className='register__btn__wrapper'>
                    {!isRegisterLoading && <Link className="register__link" to="/login">Login</Link>}
                </div>
            </form>

            <MyModal visible={modal} setVisible={setModal}>
                {serverError
                    ? (
                        <div>
                            <div className="register__modal">
                                {serverError === 422 ? 'This email is already taken' : 'Please, try again'}
                            </div>
                            <div className="register__modal__btn">
                                <MyButton onClick={() => setModal(false)}>OK</MyButton>
                            </div>
                        </div>
                    )
                    : (
                        <div>
                            <div className="register__modal">
                                Successful registred!
                            </div>
                            <div className="register__modal__btn">
                                <MyButton onClick={() => navigate('/login')}>Sign in</MyButton>
                            </div>
                        </div>
                    )
                }
            </MyModal>
        </div>
    );
};

export default Register;