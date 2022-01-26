import React from 'react';
import { Link } from "react-scroll";
function Home() {
    return (
        <div className=''>
            <section id="home">

                <div className="overlay"></div><div className="gradient-overlay"></div>

                <div className="home-content-table ">

                    <div className="home-content-tablecell">
                        <div className="row">
                            <div className="col-12">
                                <div className="home-bottom-text">

                                    <h3 className="animate-intro">Hello, World.</h3>
                                    <h1 className="animate-intro">
                                        I am Sudhir <br />
                                        Full Stack Developer
                                    </h1>

                                    <ul className="home-section-links">
                                        <li className="animate-intro">More
                                            <Link
                                                activeClass="active"
                                                to="about"
                                                className="animate-intro links"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500} >
                                                {" "}About Me</Link>
                                        </li>
                                        <li className="animate-intro">View
                                            <Link
                                                activeClass="active"
                                                to="portfolio"
                                                className="animate-intro links"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500} >
                                                {" "}My Works</Link>
                                        </li>
                                        <li className="animate-intro">Contact
                                            <Link
                                                activeClass="active"
                                                to="contact"
                                                className="animate-intro links"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500} >
                                                {" "}Me</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#about" className="scroll-icon smoothscroll">
                    <span className="icon-DownArrow"></span>
                </a>

            </section>
        </div>
    );
}

export default Home;
