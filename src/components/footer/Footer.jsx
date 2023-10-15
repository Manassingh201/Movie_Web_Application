import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    A Movie Recommendation web Application Devloped
                             By "Manas Singh"
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/profile.php?id=100058732204000">
                            <FaFacebookF />
                        </a>

                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com">
                            <FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.twitter.com">
                            <FaTwitter /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/manas-singh-3340021ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
