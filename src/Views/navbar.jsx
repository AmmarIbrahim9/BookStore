import React, { useState } from 'react';
import './login.css';
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
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' style={{color:'#FFFFFF'}}>Features</MDBNavbarLink>
              </MDBNavbarItem>  
              <MDBNavbarItem>
                <MDBNavbarLink href='#' style={{color:'#FFFFFF'}}>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem > 
                <MDBNavbarLink href='#' className='d-flex w-auto mb-3' style={{color:'#FFFFFF'}}>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}