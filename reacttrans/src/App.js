import React, { Component } from 'react';
import './App.css';

import {CSSTransition} from "react-transition-group";
import Home from './Home';
import data from './data/Data';

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    appearHome : true,
    property : data.properties[0],
  }

}

handleToggle = () => {
alert("toggle button ");
this.setState({
  appearHome : !this.state.appearHome
})
}

handlePrev = () => {
const newInd = this.state.property.index -1;
this.setState({
  property : data.properties[newInd]
})
}

handleNext = () => {
  const newInd = this.state.property.index + 1;
  this.setState({
    property : data.properties[newInd]
  })
}

  render() {
    return (
      <div className="App">
        
        <div>
         <button onClick={this.handleToggle}>Toggle</button>
         <button onClick={this.handlePrev} disabled={this.state.property.index === 0}>Prev</button>
         <button onClick={this.handleNext} disabled={this.state.property.index === this.state.property.length -1}>Next</button>
         </div>

<CSSTransition
in={this.state.appearHome}
appear={true}
timeout={300}
classNames="fade"
>
         <Home property={this.state.property}/>
         </CSSTransition>

      </div>
    );
  }
}

export default App;
