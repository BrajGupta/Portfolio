import React from 'react';
import './skills.css';
import {skills} from './../../constants/Skills.js';
import {SkillCard} from '../SkillCard/SkillCard.js';

const Skills = (props)=>{
	return(

			<div className = "skills-container">	
						<h1 className="f1">{skills.heading}</h1>
						<p className= "fw1 f3 white-80 ">{skills.quote}</p><hr/><br/>
						<h3> Industry Knowledge </h3>
						<div className = "industry-skill-container">
					 
					 {

					 	skills.industryKnowledge.map(skill =>
 								<SkillCard skills = {skill}/>
					 		)
					 }
				</div>
			</div>
		)

}
export default Skills;   