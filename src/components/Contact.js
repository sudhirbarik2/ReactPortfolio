import React from 'react';

function Contact() {
    return (
        <div>
            <section id="contact">

                <div className="overlay"></div>

                <div className="row narrow section-intro">
                    <div className="col-8 offset-2">
                        <h3 className="animate-this">Contact</h3>
                        <h1 className="animate-this">I'm Available for Work.<br/> Feel Free to Contact Me.</h1>

                    </div>
                </div>

                

                <div className=" contact-info">

                    <div className="col-4 tab-full">
                        <h5 className="animate-this">WhatsApp connect</h5>

                        <p className="animate-this">
                            7278422131
                        </p>
                    </div>

                    <div className="col-4 tab-full ">
                        <h5 className="animate-this">Email Me At</h5>

                        <p className="animate-this">
                            <a href="mailto:sudhir.barik981@gmail.com">sudhir.barik981@gmail.com</a>
                        </p>
                    </div>

                    <div className="col-4 tab-full">
                        <h5 className="animate-this">Call Me At</h5>

                        <p className="animate-this">
                            
                            Mobile: (+91) 7278 422 131<br />
                            
                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Contact;
