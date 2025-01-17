import React from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo}/>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>New &Popular</li>
                    <li>My List</li>
                    <li>Browse By Languages</li>
                    <li>Browse By Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} className='icons'/>
                <p>Children</p>
                <img src={bell_icon} className='icons'/>
                <div className="navbar-profile"></div>
                    <img src={profile_img} className='profile'/>
                    <img src={caret_icon} />
            </div>
        </div>
    );
};

export default Navbar;