import React from 'react';

function Contact() {
    return (
        <div>
            <section id="contact">

                <div className="overlay"></div>

                <div className="row narrow section-intro">
                    <div className="col-8 offset-2">
                        <h3 className="animate-this">Contact</h3>
                        <h1 className="animate-this">I'm Available<br/> Feel Free to Contact Me.</h1>

                    </div>
                </div>

                

                <div className=" contact-info">

                    <div className="col-4 tab-full">
                        <h5 className="animate-this">WhatsApp connect</h5>

                        <p className="animate-this">
                            <a href="https://wa.me/7278422131" target="_blank" rel="Sudhir's whatsapp" style={{color:"grey", textDecoration: "none"}}>7278422131</a>
                        </p>
                    </div>

                    <div className="col-4 tab-full ">
                        <h5 className="animate-this">Email Me At</h5>

                        <p className="animate-this">
                            <a href="mailto:sudhir.barik981@gmail.com" target="_blank" rel="Sudhir's mail" style={{color:"grey", textDecoration: "none"}}>sudhir.barik981@gmail.com</a>
                        </p>
                    </div>

                    <div className="col-4 tab-full">
                        <h5 className="animate-this" >Call Me At</h5>

                        <p className="animate-this" >
                        <a href="tel:7278422131" style={{color:"grey", textDecoration: "none"}}>
                            Mobile: (+91) 7278 422 131</a><br />
                            
                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Contact;
