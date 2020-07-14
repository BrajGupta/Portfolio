import React from 'react';
import './Footer.css';

const Footer = ()=>{
	return(
			<div className="footer">
				
				<h4 className = "title ">Get in touch</h4>
				<div className="clearfix"></div>
				<a href="#" className="button social facebook">
				  <i className="fa fa-facebook" aria-hidden="true"></i> Facebook 
				</a>
				
				<a href="#" className="button social linkedin">
				  <i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin 
				</a>

				<a href="#" className="button social instagram">
				  <i className="fa fa-instagram" aria-hidden="true"></i> Instagram 
				</a>

				<a href="#" className="button social google-plus">
				  <i className="fa fa-google-plus" aria-hidden="true"></i> Google + 
				</a>

				<a href="#" className="button social github">
				  <i className="fa fa-github" aria-hidden="true"></i> Github 
				</a> 
				
			</div>	

		)
}
export default Footer;