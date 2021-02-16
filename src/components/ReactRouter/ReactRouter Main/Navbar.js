import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About Us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">
          Service
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact/">
          Contact Us
        </NavLink>
        {/* <br />
        <br />
        <Link to="/"> About Us</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact/"> Contact Us</Link>
        <br />
        <br />
        <a href="/">About Us</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact Us</a> */}
      </div>
    </>
  );
};

export default Navbar;
