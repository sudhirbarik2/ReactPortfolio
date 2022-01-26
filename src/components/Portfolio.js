import React, { useState } from 'react';

function Portfolio() {
    const [detailsModalShow, setDetailsModalShow] = useState(false);
    return (
        <div>
            <section id="portfolio">

                <div className="row section-intro with-bottom-sep">
                    <div className="col-12">
                        <h3 className="animate-this">Portfolio</h3>
                        <h1 className="animate-this">See My Latest Projects.</h1>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div id="folio-wrap" className="bricks-wrapper">

                            <div className="brick folio-item">
                                <div className="item-wrap animate-this" data-src="wanderlust/img1.png" data-sub-html="#01" >
                                    <a href="#" className="overlay">
                                        <img src="wanderlust/img1.png" alt="WanderLust" />
                                        <div className="item-text">
                                            <span className="folio-types">
                                                MERN Full Stack Development
                                            </span>
                                            <h3 className="folio-title">WanderLust</h3>
                                        </div>
                                    </a>
                                    <a href="https://github.com/sudhirbarik2/WanderLust" className='details-link' title="details">
                                        <i className="icon-UpRightArrow"></i>
                                    </a>
                                </div>

                                <div id="01" className='hide'>
                                    <h4>WanderLust</h4>
                                    <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident tempor sunt quis nulla voluptate fugiat velit. <a href="www.behance.net">Details</a></p>
                                </div>
                            </div>

                            <div className="brick folio-item">
                                <div className="item-wrap animate-this" data-src="confidential_projects/adp.png" data-sub-html="#02">
                                    <a href="#" className="overlay">
                                        <img src="confidential_projects/adp.png" alt="ADP" />
                                        <div className="item-text">
                                            <span className="folio-types">
                                                MERN Full Stack Development
                                            </span>
                                            <h3 className="folio-title">Project Delivery Platform</h3>
                                        </div>
                                    </a>

                                </div>

                                <div id="02" className='hide'>
                                    <h4>Project Delivery Platform</h4>
                                    <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident tempor sunt quis nulla voluptate fugiat velit. <a href="www.behance.net">Details</a></p>
                                </div>
                            </div>

                            <div className="brick folio-item">
                                <div className="item-wrap animate-this" data-src="images/portfolio/gallery/g-explore.jpg" data-sub-html="#03" >
                                    <a href="#" className="overlay">
                                        <img src="confidential_projects/mansion.png" alt="Explore" />
                                        <div className="item-text">
                                            <span className="folio-types">
                                                MERN Full Stack Development
                                            </span>
                                            <h3 className="folio-title">MagicProperty</h3>
                                        </div>
                                    </a>

                                </div>

                                <div id="03" className='hide'>
                                    <h4>MagicProperty</h4>
                                    <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident tempor sunt quis nulla voluptate fugiat velit. <a href="www.behance.net">Details</a></p>
                                </div>
                            </div>

                            <div className="brick folio-item">
                                <div className="item-wrap animate-this" data-src="confidential_projects/shopcart.png" data-sub-html="#03" >
                                    <a href="#" className="overlay">
                                        <img src="confidential_projects/shopcart.png" alt="Explore" />
                                        <div className="item-text">
                                            <span className="folio-types">
                                                MERN Full Stack Development
                                            </span>
                                            <h3 className="folio-title">ShopCart</h3>
                                        </div>
                                    </a>

                                </div>

                                <div id="04" className='hide'>
                                    <h4>ShopCart</h4>
                                    <p>Lorem ipsum Dolor deserunt labore sint officia. Magna et aute enim proident tempor sunt quis nulla voluptate fugiat velit. <a href="www.behance.net">Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Portfolio;
