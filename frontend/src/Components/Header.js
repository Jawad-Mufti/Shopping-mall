import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
// RAFCE+enter react arrow function component export 
const Header = () => {
return(
     <header>
         <Navbar bg="dark" variant= "dark" expand="lg" 
         collapseOnSelect>
             <Container>
    <Navbar.Brand href="#home">Art Swift</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/login">Log In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>

</Navbar>
     </header>    ) 
    
}

export default Header
