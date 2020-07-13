import React from 'react';
import './projects.css';
import {projects }  from './../../constants/Projects.js';

const Project = () =>{
	return(
			<div>		
				
					<div>
						<h1 className= "f1">{projects.heading}</h1>
						<p className= "fw1 f3 white-80 ">{projects.quote}</p><hr/>
					</div>
				{	
					projects.projectList.map(pro => 
							<div>
								<br/>
								<h3 className="f3">{pro.name}</h3>
								<p className="f4 f2-l0  blue-90 mb0 lh-title">  { pro.description}</p>
								<a  className="12  grow no-underline br-pill ba ph3 pv1 mb2 dib black  pointer hover-bg-silver" href= {pro.link}>Link</a>					 						
							</div>
						)
				}
			</div>	
		)
}
export default Project;