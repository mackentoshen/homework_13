import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer>
                <div className="footer-top">
                    <div className="container">
                        <ul className="row footer-menu-container">
                            <li className="footer-menu-content col-lg-4 col-md-12 col-sm-12">
                                <p className="footer-menu-title">location</p>
                                <p className="footer-menu-description">3481 Melrose Place Beverly Hills, CA 90210</p>
                            </li>
                            <li className="footer-menu-content col-lg-4 col-md-12 col-sm-12">
                                <p className="footer-menu-title">share with love</p>
                                <div className="footer-icons">
                                    <a href="#" className="icon-border">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="icon-border">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="icon-border">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="footer-menu-content col-lg-4 col-md-12 col-sm-12">
                                <p className="footer-menu-title">about</p>
                                <p className="footer-menu-description">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec ullamcorper nulla non metus auctor fringilla.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2015 Template. All Rights Reserved
                        Made with <i className="fa fa-heart" aria-hidden="true"></i>
                        <a className="footer-link" href="#">by Kamal Chaneman</a>
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
