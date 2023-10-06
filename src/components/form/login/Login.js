import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginImage from '../../../images/login-image.png';
import { userLogin } from '../../../actions/actions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialUser = {
        email: '',
        password: '',
    };

    const [userData, setUserData] = useState(initialUser);
    const [loginError, setLoginError] = useState(null); // State to track login errors

    const handleLogin = async (e) => {
        e.preventDefault();
        if (userData.email === '' || userData.password === '') {
            alert('Email and password are required');
            return;
        }

        try {
            // Dispatch the userLogin action and wait for the result
            const result = await dispatch(userLogin(userData));

            if (result) {
                navigate('/home');
            } else {
                setLoginError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginError('An error occurred during login.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className='login__container'>
            <div className="login__form">
                <div className="login__image__container">
                    <img className='login__image__logo' src={LoginImage} alt="user profile" />
                </div>

                <h1 className='login__heading'>Sign In</h1>

                <p className='login__text'>Welcome user, you are going to have an experience like never before.</p>

                <form onSubmit={handleLogin} className='login__form__inputs'>
                    <input
                        className='login__input__field'
                        onChange={handleChange}
                        value={userData.email || ''}
                        type="email"
                        placeholder='Email'
                        name="email"
                    />
                    <input
                        className='login__input__field'
                        onChange={handleChange}
                        value={userData.password || ''}
                        type="password"
                        placeholder='Password'
                        name="password"
                    />

                    <button type="submit" className='login__button'>Log In</button>
                </form>

                {loginError && <p className="login__error">{loginError}</p>}

                <p>Still without an account? <a href="/register">Create Account</a></p>
            </div>
        </div>
    );
};

export default Login;
