/*import */
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
const App = () => {
    return (
        <React.Fragment>
            <div className="App">
{ /*Heading */ }
            <h1>Welcome</h1>
{/*Barre de navigation */}
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
{/*Card 1 */ }
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="ultra 2.png/100px180" />
<Card.Body>
        <Card.Title>Model 1</Card.Title>
        <Card.Text>
        Name: Apple watch ultra 2
        </Card.Text>
        <Button variant="primary">ADD</Button>
    </Card.Body>
    </Card>
{/*Card 2 */ }
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="serie 9.png/100px180" />
    <Card.Body>
        <Card.Title>Model 2</Card.Title>
        <Card.Text>
        Name: Apple watch series 9
        </Card.Text>
        <Button variant="primary">ADD</Button>
    </Card.Body>
    </Card>
{/*Card 3 */ }
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="SE.png/100px180" />
    <Card.Body>
        <Card.Title>Model 3</Card.Title>
        <Card.Text>
        Name: Apple watch SE
        </Card.Text>
        <Button variant="primary">ADD</Button>
    </Card.Body>
    </Card>
   {/*Form */ }
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Form>
            </div>
        </React.Fragment>



    )
}

export default App