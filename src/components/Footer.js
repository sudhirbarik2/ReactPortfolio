import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
     	<div className="">

     		<div className=" social">
     			<ul className="footer-social">        
			      <li><a href="https://www.facebook.com/vicky.barik2" target='_blank'>Facebook</a></li>
			      <li><a href="https://twitter.com/VickyBarik" target='_blank'>Twitter</a></li>
			      <li><a href="https://www.linkedin.com/in/sudhir-barik-258862171/" target='_blank'>LinkedIn</a></li>
			      <li><a href="https://www.instagram.com/iamvickybarik/?hl=en" target='_blank'>Instagram</a></li>
			   </ul> 	      		
	      </div>

      	<div className="col-12 tab-full">
	      	<div className="copyright">
		        	<span>© Copyright Sudhir Barik 2021.</span> 		        	         	
		      </div>		                  
	      </div>      	

      </div> 

      <div id="go-top">
		   <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-UpArrow"></i></a>
		</div>		
   </footer>

    </div>
  );
}

export default Footer;
