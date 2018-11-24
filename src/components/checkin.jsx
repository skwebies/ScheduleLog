import React, { Component } from "react";
import firebase from "./firebase";
import { navigate } from "@reach/router";

class CheckIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    e.preventDefault();

    const ref = firebase
      .database()
      .ref(`{meetings/${this.props.userID}/${this.props.meetingID}/attendees`);
    ref.push({
      attendeeName: this.state.displayName,
      attendeeEmail: this.state.email
    });
    navigate(`/attendees/${this.props.userID}/${this.props.meetingID}`);
  }

  render() {
    return (
      <form action="" className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Check in</h3>
                  <section className="form-group">
                    <label
                      htmlFor="displayName"
                      className="form-control-label sr-only"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      id="displayName"
                      name="displayName"
                      placeholder="Name"
                      value={this.state.displayName}
                      onChange={this.handleChange}
                    />
                  </section>
                  <section className="form-group">
                    <label
                      htmlFor="Email"
                      className="form-control-label sr-only"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </section>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Check in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CheckIn;
