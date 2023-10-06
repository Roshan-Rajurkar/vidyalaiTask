import React, { useEffect, useState } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import Profile from '../../images/login-image.png'
import FileUpload from '../main/FileUpload/FileUpload';

const Home = () => {

    const storeData = useSelector((state) => state.users);
    const [activeUser, setActiveUser] = useState('')
    useEffect(() => {
        if (storeData) {
            setActiveUser(storeData.currentUser.email)
            console.log(storeData)
        }
        else
            console.log('store not found');

    }, [storeData]);

    return (
        <div className='home__container'>
            <nav>
                <header>
                    <div className="nav__heading">
                        <h1>PDFsnap</h1>
                    </div>
                    <div className="nav__user">
                        <img src={Profile} alt="profile" />
                        <span>{activeUser ? activeUser : 'Guest'}</span>
                    </div>
                </header>
            </nav>

            <div>
                <FileUpload />
            </div>
        </div>
    );
}

export default Home;
