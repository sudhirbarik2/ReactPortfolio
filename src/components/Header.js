import React from 'react';

function Header() {
    return (
        <div>
            <header>

                <a id="header-menu-trigger" href="#0">
                    <span className="header-menu-text">Menu</span>
                    <span className="header-menu-icon"></span>
                </a>

                <nav id="menu-nav-wrap">

                    <a href="#0" className="close-button" title="close"><span>Close</span></a>

                    <h3>Sudhir</h3>

                    <ul className="nav-list">
                        <li className="current"><a className="smoothscroll" href="#home" title="">Home</a></li>
                        <li><a className="smoothscroll" href="#about" title="">About</a></li>
                        <li><a className="smoothscroll" href="#skills" title="">Skills</a></li>
                        <li><a className="smoothscroll" href="#credentials" title="">Experience</a></li>
                        <li><a className="smoothscroll" href="#portfolio" title="">Works</a></li>
                        <li><a className="smoothscroll" href="#stats" title="">Stats</a></li>
                        <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
                    </ul>

                    <ul className="header-social-list">
                        <li>
                            <a href="#"><i className="fa fa-facebook-square"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-behance"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>

                </nav>

            </header>

        </div>
    );
}

export default Header;
