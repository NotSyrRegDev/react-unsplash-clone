import React from 'react';
import './customMyUtility.css';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="d-grid">
                <div className="g-col-4 mx-3">

                    <div className="logo__fotter mx-3 my-2">
                    <img className="footer_logo-website" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg" alt=""/>
                    <p className="logo-para">Photo for Everyone</p>
                    </div>

                    <div className="browsing-list-1 mt-2">
                        <h1>Browse Also</h1>
                        <ul>
                            <li><a className="footer_link-blue" href="">Blue</a></li>
                            <li><a className="footer_link-seed" href="">Seed</a></li>
                            <li><a className="footer_link-grap" href="">Graphsyic</a></li>
                        </ul>
                    </div>

                    <div className="browsing-list-2 mt-4">
                     <ul>
                            <li><a className="footer_link-nat"  href="">Nature</a></li>
                            <li><a className="footer_link-oce" href="">Oceam</a></li>
                            <li><a className="footer_link-for" href="">Forest</a></li>
                        </ul>
                    </div>

                    <div className="follow-us mt-2">
                        <h1>Follow Us</h1>
                        <div className="mt-1 d-flex social-links">
                        <i className="fab fa-facebook-f footer_social-facebook"></i>
                        <i className="fab fa-twitter footer_social-twitter"></i>
                        <i className="fab fa-instagram footer_social-instagram"></i>
                        <i className="fab fa-tiktok footer_social-tiktok"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
