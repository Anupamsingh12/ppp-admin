import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './output-onlinepngtools.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success('Logged Out Successfully');
    navigate('/');
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <>
      <Navbar bg="light" expand="lg" variant="light" >
        {/* <Navbar.Brand className="" style={{ cursor: 'pointer' }}> */}
          <img
            src={logo}
            onClick={() => navigate('/')}
            alt="Logo"
            height="45"
            className="ml-1"
          />
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => navigate('/')} style={{ cursor: 'pointer', color:"#dc3545" }}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/articles')} style={{ cursor: 'pointer',color:"#dc3545" }}>
              Articles
            </Nav.Link>
            {user?.user?.name ? (
              <Nav.Link onClick={logout} style={{ cursor: 'pointer',color:"#dc3545" }}>
                Logout ({user?.user?.name})
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => navigate('/login')} style={{ cursor: 'pointer',color:"#dc3545" }}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
