import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../Logo/Logo';
import { Switch, Route, Link } from "react-router-dom";
import CardViewLibrary from '../../../containers/CardViewLibrary/CardViewLibrary';
import SignUp from '../../../containers/SignUp/SignUp';
import SignIn from '../../../containers/SignIn/SignIn';
import classes from '../Navigation/Navigation.css';



const navigation = () => {
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
              <Nav.Link href="/SignIn">Sign in</Nav.Link>
              <Nav.Link href="/SignUp" >Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <CardViewLibrary />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default navigation;