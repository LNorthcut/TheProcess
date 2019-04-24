import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './comp.css';


class Footer extends React.Component {
    render() {
        return(
<Jumbotron fluid className = "foot">
<Card className="text-center">
  <Card.Header className='Der'>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
  <Card.Footer  className="text-muted">&copy; Lauren Brown</Card.Footer>
</Card>

</Jumbotron>
        )
    }
}
export default Footer




