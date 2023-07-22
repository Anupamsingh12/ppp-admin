import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './output-onlinepngtools.png'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
    const logout =()=>{
     
      localStorage.clear()
      navigate('/')
    }
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
  return (
    <>
    <Navbar expand="lg" bg="light" variant="light">
  <Navbar.Brand className=''>
    <img src={logo} alt="Logo" height="45" className='ml-1' /> {/* Adjust the height as needed */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbar-nav" />
  <Navbar.Collapse id="navbar-nav">
    <Nav className="ml-auto">
      <a onClick={()=>{navigate('/')}}>Home {user?.user?.name } </a>
      {/* <Nav.Link >Contact</Nav.Link> */}
     {user?.user?.name && <a onClick={logout}>Logout</a> } 
     {!user?.user?.name && <a onClick={()=>{navigate('/login')}}>Login</a> } 
    </Nav>
  </Navbar.Collapse>
</Navbar>

    
            </>
  );
};

export default Header;
