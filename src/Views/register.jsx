import React from 'react';
import './register.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid className="p-3 my-5" style={{backgroundColor:'white'}}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg?w=740&t=st=1680728112~exp=1680728712~hmac=993eec8cf259ac8ed81875db1e9d237580d691c08b15a22d6fa07dd541b64fa7" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Address' id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type='text' size="lg"/>
    

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
      <Link to='/login'>
      <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign Up</MDBBtn>
          </Link>
        

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;