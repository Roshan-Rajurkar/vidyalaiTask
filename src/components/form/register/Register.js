import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import RegisterImage from '../../../images/register-image.png';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../../actions/actions';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialUser = {
        userName: '',
        email: '',
        password: '',
    };

    const [userData, setUserData] = useState(initialUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (userData.userName === '' || userData.email === '' || userData.password === '') {
            console.log('Any of the fields is missing');
            return;
        }

        dispatch(userRegister(userData));
        navigate('/home');
        console.log('Register Successfully', userData);

        setUserData(initialUser);
    }

    return (
        <div className='register__container'>
            <div className="register__form">
                <div className="register__image__container">
                    <img className='register__image__logo' src={RegisterImage} alt="user profile" />
                </div>

                <h1 className='register__heading'>Register</h1>

                <p className='register__text'>Welcome user, get ready to unlock new possibilities with your account.</p>

                <form onSubmit={handleRegister} className='register__form__inputs'>
                    <input
                        className='register__input__field'
                        onChange={handleChange}
                        value={userData.userName || ''}
                        type="text"
                        placeholder='Full Name'
                        name="userName"
                    />
                    <input
                        className='register__input__field'
                        onChange={handleChange}
                        value={userData.email || ''}
                        type="email"
                        placeholder='Email'
                        name="email"
                    />
                    <input
                        className='register__input__field'
                        onChange={handleChange}
                        value={userData.password || ''}
                        type="password"
                        placeholder='Password'
                        name="password"
                    />

                    <button type="submit" className='register__button'>Register</button>
                </form>

                <p>Already have an account? <a href="/">Log In</a></p>
            </div>
        </div>
    )
}

export default Register;
