import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

import './comp.css';






class Chum extends React.Component {

    render() {        
      return (
 
  <Jumbotron fluid>
  <Container>
  <Row>
  <CardGroup>
  <Card>
    <Card.Img variant="top"  src="https://images.pexels.com/photos/33535/primate-ape-thinking-mimic.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Footer>
    <Card.Title className="Titl">THINK</Card.Title>
    </Card.Footer>
    <Card.Body>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/2564/typography-white-door-fence.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Footer>
    <Card.Title  className="Titl">PLAN</Card.Title>
    </Card.Footer>
    <Card.Body>
    
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Footer>
            <Card.Title  className="Titl">CONQUER</Card.Title>
    </Card.Footer>
    <Card.Body>

      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
  </Row>
  </Container>
</Jumbotron>

    

       
      )
    }
  
  
  }

  export default Chum


