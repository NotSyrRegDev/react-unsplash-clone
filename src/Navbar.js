import React , {useState} from 'react';
import './Navbar.css';
import { Link  } from 'react-router-dom';
import {addDark , removeDark} from './ToggleDark';

const Navbar = () => {
    const [darkMode , setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (darkMode === false) {
            setDarkMode(true);
            addDark();
        } else {
            setDarkMode(false);
            removeDark();
        }

    }
    return (
        <div className="contaienr">
            <nav className="navbar__flex">

                <div className="logo-div">
                <Link to="/" >    <img className="logo-website" src={`https://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg` }alt=""/> </Link>
                    <p className="logo-para">Photo for Everyone</p>

                </div>

                    <div className="search-div">
                    <input type="text" className="search-input" placeholder="Search Free high resolution Photos" />
                    </div>
                  
               

                <div className="web-info-div">
                   <ul className="flex-items">
                  <li><a href="" className="web-link-a-brand" >Brands</a></li> 
                    <li><a href="" className="web-link-a-explore" >Explore</a></li>
                    <li><a href="" className="web-link-a-blog" >Blog</a></li>
                   </ul>
                </div>

                <div className="join-div">
                 <Link to="/login" className="carousel" >   <button className="btn__login-btn carousel">Login</button> </Link>
                 <Link to="/signup" className="carousel" >   <button className="btn__join-btn carousel">Join Free</button> </Link>
                 <i className={`fas fa-toggle-${darkMode ? 'on' : 'off'} toggle-darkMode`} onClick={() => toggleDarkMode()}  ></i>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
