import React, { Component } from "react";

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
                <a href="/register" className="btn btn-outline-primary">
                  Register
                </a>

                <a href="/login" className="btn btn-outline-primary m-1">
                  Login
                </a>
              </span>
            )}
            {user && (
              <a href="/meetings" className="btn btn-primary">
                Meetings
              </a>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
