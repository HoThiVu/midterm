import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Headerr extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Aun Vu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                 
                  <Link class="nav-link" to='/'>NEWs</Link>
                </li>
                <li class="nav-item">
              
                  <Link  class="nav-link" to='/Admin'>ADMIN</Link>
                  {/* app sigle page */}
                </li>
               
                <li class="nav-item">
                  <a class="nav-link ">Tin tức ngoài</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}
export default Headerr;