import './register.css';
import React, {useState} from "react";
import Axios from "axios";
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
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      username: username,
      email: email,
      password: password,
      address: address,
      phonenumber: phonenumber,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

  return (
    
    <MDBContainer fluid className="p-3 my-5" style={{backgroundColor:'white'}}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg?w=740&t=st=1680728112~exp=1680728712~hmac=993eec8cf259ac8ed81875db1e9d237580d691c08b15a22d6fa07dd541b64fa7" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' onChange={(e) => {setUsername(e.target.value)}} type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' onChange={(e) => {setEmail(e.target.value)}} type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' onChange={(e) => {setPassword(e.target.value)}} type='password' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Address' id='formControlLg' onChange={(e) => {setAddress(e.target.value)}} type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' onChange={(e) => {setPhonenumber(e.target.value)}} type='text' size="lg"/>
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
      {/* <Link to='/login'> */}
      <MDBBtn onClick={register} className="mb-4 w-100 gradient-custom-2">Sign Up</MDBBtn>
          {/* </Link> */}
        

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;