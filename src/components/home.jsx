import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6 mx-auto p-2">
            <h1 className="text-center text-primary">Meeting Log</h1>
            <h5 className="text-center">
              Simple web application for tracking the meetings.
            </h5>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 mx-auto">
            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-primary">
                  Register
                </Link>

                <Link to="/login" className="btn btn-outline-primary m-1">
                  Login
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Meetings
              </Link>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
