import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../Logo/Logo';
import { Link } from "react-router-dom";
import classes from '../Navigation/Navigation.css';
import app from '../../../base';
import { AuthContext } from "../../../Auth";



const navigation = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar className={classes.navbarstyle} collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link to="/">
            <Logo />
          </Link>
          <Navbar.Brand href="/">
            Audio library
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
             { !currentUser && <Nav.Link href="/SignIn">Sign in</Nav.Link>}
             { !currentUser && <Nav.Link href="/SignUp" >Sign up</Nav.Link>}
             { currentUser && <Nav.Link onClick={() => app.auth().signOut()} href="/" >Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default navigation;