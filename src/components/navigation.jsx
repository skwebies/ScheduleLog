import React, { Component } from "react";
import { FaUsers } from "react-icons/fa";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <FaUsers className="mr-1" />
            Meeting Log
          </a>
          <div className="navbar-nav ml-auto">
            {user && (
              <a href="/meetings" className="nav-item nav-link">
                meetings
              </a>
            )}
            {!user && (
              <a href="/login" className="nav-item nav-link">
                login
              </a>
            )}
            {!user && (
              <a href="/register" className="nav-item nav-link">
                register
              </a>
            )}
            {user && (
              <a href="/logout" className="nav-item nav-link">
                log out
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
