import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigater = () => {
  return (
   <>
<Navbar style={{marginBottom : '20px'}} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/users'>Users</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Navigater
