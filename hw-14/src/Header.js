import React from 'react';

const Header = () => {
    return (
        <div>

            <section className="welcome-section">
                <div className="container">
                    <header className="row page-header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <h1>
                                <a className="navbar-brand" href="index.html">
                                    <img className="logo" src="images/logo.png" alt="logo"/>
                                </a>
                            </h1>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#features">features <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#works">works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#team">our team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#testimoinals">testimonials</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#download">download</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <div className="welcome-block">
                        <h2 className="welcome-title">Your Favorite One Page Multi Purpose Template</h2>
                        <p className="welcome-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna
                            vel scelerisque nisl consectetur et.
                        </p>
                        <button className="welcome-btn">find out more</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Header;