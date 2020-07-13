import React from 'react';
import './section-container.css';
import About from '../About/About.js';
import Skills from '../Skills/Skills.js';
import Project from './../Projects/Project.js';


const SectionContainer = ({route}) => {
	return(
			<div className = "section-container">
			
				<div className="section-component">
			  	{
			  		route === 'About'
			  		? 
			  			<div>
			  				<About/>
			  			</div>
			  		:(
			  				route === 'Skills'
			  				? <Skills/>
			  				: <Project/>
			  		 )
			  	}
				</div>  
				
			</div>
		)
}
export default SectionContainer;    