import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBCardText
} from 'mdb-react-ui-kit';

export default function App() {

  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
  
      <>

      <MDBNavbar expand='lg' light  className='gradient-custom-2'> 
      {/* style={{ backgroundColor: '#e3f2fd' }} */}
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color:'#FFFFFF'}}>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active' >
                <MDBNavbarLink aria-current='page' href='#' style={{color:'#FFFFFF'}} >
                  
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to= '/register'>
                <MDBNavbarLink href='#' style={{color:'#FFFFFF'}}>Register</MDBNavbarLink>
               </Link>
              </MDBNavbarItem>  
              <MDBNavbarItem>
               <Link to= '/login'>
                <MDBNavbarLink href='#' style={{color:'#FFFFFF'}}>Login</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem > 
                <MDBNavbarLink href='#' className='d-flex w-auto mb-3' style={{color:'#FFFFFF'}}></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>

  );
}