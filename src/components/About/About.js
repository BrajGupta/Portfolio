import React from 'react';
import './about.css';
import {about} from './../../constants/About.js';

const About = () => {
	  return(
	  		<div className=" about-container">
	  			<h1 className="f1">{about.heading}</h1>
	  			<p className="fw1 f3 white-80 " >{about.quote}</p>
	  			<hr/>
	  			
	  			
	  				<h4 style = {{margin: "0px"}} className="f4 f2-l0  blue-90 mb0 lh-title">Hello! <br/>I'm Sahil.<br/></h4>
	  				<p className="f4 f2-l0  blue-90 mb0 lh-title">I'm a UI Designer and Front End Developer.<br/>Currently studying in ITER,Bhubaneshwar.</p><br/>
	  	  			<p className="f4 f2-10  blue-90 mb0 2h-title">{about.bio}</p><br/>
	  				<p className="f4 f2-l0  blue-90 mb0 lh-title">{about.bio1}</p>

	  		</div>
	  	)
}
export default About;
