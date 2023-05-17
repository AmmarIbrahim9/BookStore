import React from 'react';


import { BrowserRouter as Router  , Route , Switch , Link } from 'react-router-dom';
import Login from './Views/login';
import Register from './Views/register';  
import Navbar from './Views/navbar';
import Main from './Views/Main';



function App() {
  return (
  <Router>
    <Navbar/>
    <Switch>
    <Route path='/login'>
    <Login/>
    </Route>
    <Route path='/register'>
    <Register/>
    </Route>
    <Route path='/main'>
    <Main/>
    </Route>
    </Switch>




  </Router>
  
  );
}

export default App;
