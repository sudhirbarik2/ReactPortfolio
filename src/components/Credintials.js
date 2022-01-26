import React from 'react';

function Credintials() {
    return (
        <div>
            <section id="credentials">

                
                <div className="col-12  section-intro with-bottom-sep">
                    
                        <div className="row">
                            <h3 className="animate-this bottom-setup">Career and Education</h3>
                            <h1 className="animate-this bottom-setup">More of My Credentials.</h1>

                            <p className="lead">Starting from a student to a professional Full Stack Developer<br />The journey is here...</p>

                        </div>
                    
                </div>

                <div className="row wide credentials-content mx-auto">

                    <div className="col-md-6 col-sm-10 col-xs-10 left">

                        <h2 >Experience</h2>

                        <div className="timeline-wrap">

                            <div className="timeline-block animate-this">
                                <div className="timeline-ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <div className="timeline-header">
                                    <p className="timeframe">January 2020 - Present</p>
                                    <h3>Infosys Limited</h3>
                                    <h4>System Engineer</h4>
                                </div>
                                <div className="timeline-content">
                                    <p className="personalInfo">Two years of experience with Infosys having MERN stack full stack developement and ETL (Using Informatica) experience</p><br/>
                                    <p className="personalInfo">Technologies Used:</p>
                                    <p className="personalInfo">React,
                                        Angular,
                                        RxJS,
                                        TypeScript,
                                        JavaScript,
                                        Bootstrap,
                                        MDBootstrap,
                                        Material UI,
                                        Node,
                                        Express,
                                        Mongo DB,
                                        REST API</p>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12 right">

                        <h2 >Education</h2>

                        <div className="timeline-wrap">


                            <div className="timeline-block animate-this">
                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-header">
                                    <p className="timeframe">June 2016 - July 2019</p>
                                    <h3>Heritage Institute Of Technology</h3>
                                    <h4>Bachelor Of Technology</h4>
                                </div>
                                <div className="timeline-desc">
                                    <p className="personalInfo">Completed Bachelor of Technology in Computer Science and Engineering</p>
                                </div>
                            </div>

                            <div className="timeline-block animate-this">
                                <div className="timeline-ico">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-header">
                                    <p className="timeframe">June 2013 - October April</p>
                                    <h3>The Calcutta Technical School</h3>
                                    <h4>Diploma in Engineering and Technology</h4>
                                </div>
                                <div className="timeline-content">
                                    <p className="personalInfo">Completed Diploma in Computer Science and Technology</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

              
            </section>
        </div>
    );
}

export default Credintials;
