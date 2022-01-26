import React from 'react';
import { Link } from "react-scroll";

function About() {
    return (
        <div>
            <section id="about">

                <div className="about-profile-bg"></div>
                
                <div className="about-wrap row">

                    <div className="col-md-6 col-sm-12 col-xs-12 about-profile">

                        <div className="about-profile-bg"></div>

                        <div className="intro">
                            <h3 className="animate-this">About</h3>
                            <h1 className="animate-this">More About Me.</h1>

                            <p className="lead animate-this">
                            </p>
                        </div>
                        
                        <p className=" moreAboutMe animate-this">
                            I have over two year of experience as a system engineer with Infosys Limited. Within this time there, I've already contributed to 3 projects and assisted with managing one project for one of the firm's long-time clients.

                            I constantly seeks out innovative solutions to everyday problems. In this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team.

                            Prior to this role, I completed a two-months internship with Ardent Technologies, where I honed my Android mobile app development skills. Ideally, I would like to continue as a Full-stack developer..
                        </p>

                        <p className="animate-this personalInfo">Other than these, in personal life I love to capture photos, travel and reading books in leasure time.</p>
                        
                        <p>
                        
                            <a href="#contact" className="button aboutButton full-width animate-this">Contact Me</a>
                            <a href="https://drive.google.com/file/d/1Zc0EsvBfrkMcAqpTblQYTvQ_tdqT7d48/view?usp=sharing" target='_blank' className="button button-primary full-width animate-this" rel="noreferrer">Download CV</a>
                        </p>

                    </div>

                    <div className="about-services col-md-6 col-sm-12 col-xs-12">

                        <div className="intro">
                            <h3 className="animate-this">Services</h3>
                            <h1 className="animate-this">What I Do.</h1>

                            <p className="lead animate-this">A passionate Full Stack Web Developer having an experience of building scalable Web applications with JavaScript / Reactjs / Angular / Nodejs / MongoDB and some other cool libraries and frameworks and Cross Platform Web applications.</p>
                        </div>

                        <ul className="services">
                            <li className="animate-this">

                                <div className="">
                                    <h4>Front-End Developement</h4>
                                    <p className="personalInfo">Use HTML,CSS, Bootstrap, React, Angualr to develope front-end applications.
                                    </p>
                                </div>
                            </li>
                            <li className="animate-this">

                                <div className="">
                                    <h4>WebService Developement</h4>
                                    <p className="personalInfo">Use NodeJs and ExpressJS to develope REST API based WebServices.
                                    </p>
                                </div>
                            </li>
                            <li className="animate-this">

                                <div className="">
                                    <h4>Database management</h4>
                                    <p className="personalInfo">Use SQL and MongoDB No-SQL Databse to store data and also can do ETL using Informatica
                                    </p>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default About;
