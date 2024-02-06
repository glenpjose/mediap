import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>   <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand>

        <Link to={''} style={{textDecoration:'none',color:'silver',fontSize:'30px'}}>
        <i class="fa-solid fa-play fa-beat-fade me-2"> </i>
     <span className='text-info'>   Media Player </span>
        </Link>

      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header