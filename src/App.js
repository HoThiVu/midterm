import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import routes from './routes';

function App(props) {
  const link = routes.map(item=><li><Link to={item.path}>{item.name}</Link></li>)
  const router = routes.map(item=><Route path={item.path}  element={item.component}></Route>)
  // const link = routes.map(item=> <li>{item.name}</li>)
  return (
    <>
  <nav>
    <ul>
    {link}
    </ul>
  </nav>
  <Routes>
      {router}
  </Routes>
    </>
  );
}

export default App;