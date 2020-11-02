import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {		   //use this.setState( ) and pass in an object; which merges w/ current state
    // Update our state here…		=> updated state = component auto re-renders
    this.setState({
        hasBeenClicked: true
     })
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
export default ClickityClick;
