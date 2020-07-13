import React  from 'react';
import './Profile.css';
import sahil from './sahil.jpg';

const Profile =()=>{
	return(
		<article className=" grow mw5 center bg-moon-gray br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4-ns ">
			  <div className="tc">
			    <img src={sahil} className="br-100 h4 w4 dib ba b--black-05 pa2 shadow-4-ns" title="sahil" alt ="profile"/>
			    <h1 className="f3 mb2">Sahil Gupta</h1>
			    <h2 className="f5 fw4 gray mt0">Front End Developer</h2>
			  </div>
		</article>
		)
}
export default Profile;