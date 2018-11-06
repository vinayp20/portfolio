import React, { Component } from 'react';
import logo from './kiwi-deviantArt.png';
import './App.css';

import {Label, Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Vinay Pataley</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">About
          </NavItem>
          <NavItem eventKey={2} href="#">Interests
          </NavItem>
          <NavDropdown eventKey={3} title="External Links" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/vpataley">LinkedIn</a></MenuItem>
            <MenuItem eventKey={3.2}><a target="_blank" rel="noopener noreferrer" href="https://github.com/vinayp20">Github</a></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      
        <header className="App-header">
          <label>Currently learning React to build this website. By next weekend i.e 11/12 it should be complete.</label>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <img src="kiwi-devia"></img> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
