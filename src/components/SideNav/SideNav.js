import React  from 'react';
import Profile from './Profile';
import 'tachyons';

const SideNav = ({handleclick}) => {
	 return(
	 	<div  className = "sidenav">
	 			<Profile/>

	 			<div>
	 				<hr/>
	 				<h2 className="f12  grow no-underline br-pill ba ph3 pv2 mb2 dib black pointer hover-bg-silver" onClick = {()=>handleclick('About')}>  About Me </h2><br/>
	 				<h2 className="f12 grow no-underline br-pill ba ph3 pv2 mb2 dib black pointer hover-bg-silver" onClick = {()=>handleclick("Skills")}> Skills </h2><br/>
	 				<h2 className="f12 grow no-underline br-pill ba ph3 pv2 mb2 dib black pointer hover-bg-silver" onClick = {()=>handleclick("Projects")}> Projects </h2><br/>
	 				<hr/>
	 			</div>
	 	</div>
	 	)
}

export default SideNav;