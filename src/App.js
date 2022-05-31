import React from 'react';
// import appStyle from './aset/appStyle.css';
import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Add from './component/Add';
import Admin from './component/Admin';
import Headerr from './component/Headerr';
import routes from './routes';

function App(props) {
//   
return(
  <>
  <Headerr></Headerr>
  <Routes>
  <Route path ='/' element={ <Add></Add>}>
 
  </Route>
  <Route path='/Admin' element={<Admin></Admin> }>

  </Route>
</Routes>
  {/* <Add>

  </Add> */}

  </>
)
}

export default App;