import React from 'react';

import './SideDrawer.css';

import { Link } from "react-router-dom";
// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio";
// import Resume from "../../pages/Resume";
// import Skills from "../../pages/Skills";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profilemenu">Profile</Link>
        </li>
      
        <li>
        <Link to="/bookingsmenu">Bookings</Link>
      </li>
      <li>
        <Link to="/aboutusmenu">AboutUs</Link>
      </li>
      <li>
        <Link to="/signupmenu">SignUp</Link>
      </li>
      
      
        </ul>
    
        </nav>
        
  );
};

export default sideDrawer;
