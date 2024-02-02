import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import UsersService from '../API/UsersService';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/buttons/MyButton';
import { AuthContext } from '../context/context';
import '../styles/Login.css';

const Login = () => {
    const {setIsUserAuthorized} = useContext(AuthContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [inputErrors, setInputErrors] = useState({ name: false, email: false, password: false });
    const [modal, setModal] = useState(false);
    const [serverError, setServerError] = useState(null);

    const [login, isLoginLoading] = useFetching(async () => {
        if (email === '') {
            setInputErrors((prevErrors) => ({ ...prevErrors, email: true }));
        } else if (password === '' || password.length < 8) {
            setInputErrors((prevErrors) => ({ ...prevErrors, password: true }));
        } else {
            setServerError(null);
            try {
                await UsersService.authUser(email, password);
                setIsUserAuthorized(true);
                navigate('/posts');
            } catch (e) {
                setServerError(e.response.status);
                setModal(true);
            }
        }
    });

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='login__wrapper'>
            <h1 className='login__header'>Login</h1>
            <form>
                <input 
                    className={`login__input ${inputErrors.email ? 'login__input__error' : ''}`}
                    type='email' 
                    placeholder='email'
                    autoComplete='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setInputErrors((prevErrors) => ({ ...prevErrors, email: false }));
                    }}
                />
                <div className='login__input__password'>
                    <input
                        className={`login__input ${inputErrors.password ? 'login__input__error' : ''}`}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setInputErrors((prevErrors) => ({ ...prevErrors, password: false }));
                        }}
                    />
                    <input 
                        className='login__input__password__checkbox'
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className='login__btn__wrapper'>
                    {isLoginLoading 
                        ? (
                            <div className='login__btn__loader'>
                                <Loader />
                            </div>
                        ) : (
                            <button className='login__btn' type='button' onClick={() => {login()}}>
                                Sign in
                            </button>
                        )
                    }
                </div>
                <div className='login__btn__wrapper'>
                    {!isLoginLoading && <Link className="login__link" to="/register">Register</Link>}
                </div>
            </form>

            <MyModal visible={modal} setVisible={setModal}>
                <div>
                    <div className="login__modal">
                        {serverError === 401 ? 'Wrong email or password' : 'Please, try again'}
                    </div>
                    <div className="login__modal__btn">
                        <MyButton onClick={() => setModal(false)}>OK</MyButton>
                    </div>
                </div>
            </MyModal>
        </div>
    );
};

export default Login;