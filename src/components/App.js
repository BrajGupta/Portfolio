import React,{Component} from 'react';
import './App.css';
import Portfolio from './Portfolio/Portfolio.js';
import Particles from 'react-particles-js';
import Footer from './Footer';



const particlesoptions = {
  particles: {
    number: {
      value:30,
      density: {
          enable:true,
          value_area:250 
      }
    }
 }  
}

class App extends Component {
    constructor()
    {
        super();
        this.state = {
            route: 'About'
        }

    }
    
    handleSectionClick = (sectionname) =>   {
            this.setState({route:sectionname});
          
        }

    render(){
         return (
            <div className="App">
                    <Particles className="particles" 
                        params={particlesoptions}
                    />
                    <Portfolio
                    handleclick = {this.handleSectionClick}
                    route = {this.state.route}
                    />
                    <Footer/>

            </div>
  );
    }

}
export default App;
 