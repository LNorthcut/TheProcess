import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card'

import './comp.css';


export default class S2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'amplify your thoughts here'
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        return(
            <Jumbotron fluid>
            
  <Container>
    <div className='B'>
    <h1>What Are Your Thoughts</h1>
    <p>
    What blockage is occurring to prohibit from realizing your greatness around the world?<br/>Where are you now?<br/>Did you know that smiling is Tabo?
    </p></div><div className='fo'><div > <form onSubmit={this.handleSubmit} >     
            <textarea  rows='8' cols='35'   value={this.state.value} onChange={this.handleChange} />
        </form></div></div>
        <input type="submit" value="Submit" />

  </Container>
</Jumbotron>
        )
    }
}