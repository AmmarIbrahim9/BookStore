import './login.css';
import { Link } from 'react-router-dom';
import React, {useState} from "react";
import Axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus("Welcome !! "+response.data[0].email);
      }
    })
  }

  return (
    <MDBContainer className="my-5 gradient-form" >

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://pbs.twimg.com/media/Cpb451pWAAE5xJa.jpg"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Book Borrow Website</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' onChange={(e) => {setEmail(e.target.value)}} id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' onChange={(e) => {setPassword(e.target.value)}} id='form2' type='password'/>
            <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>

            <div className="text-center pt-1 mb-5 pb-1">
               <Link to= '/Main'>
              <MDBBtn  className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              </Link> 
              
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to= '/register' >
              <MDBBtn outline className='mx-2' color='#203A43' >
               SignUp
               
              </MDBBtn>
              </Link>
            </div>

          </div>

        </MDBCol>

        {/* <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a Website</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol> */}

      </MDBRow>

    </MDBContainer>
  );
}

export default App;