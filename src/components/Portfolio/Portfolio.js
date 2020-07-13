import React  from 'react';
import './portfolio.css';
import SideNav from '../SideNav/SideNav.js';
import SectionContainer from '../SectionContainer/SectionContainer.js';

const Portfolio = ({handleclick,route}) => {
	 return(
	 	<div  className = "portfolio-container">

	 			<div className = "sidenav-container">
	 				<SideNav
	 				handleclick={handleclick}/>
	 			</div>

	 			<div className= "main-section-container">
	 				<SectionContainer    route ={route}/>
	 			</div>
	 	</div>
	 	)
}

export default Portfolio;