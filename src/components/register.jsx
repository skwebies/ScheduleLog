import React, { Component } from "react";
import FormError from "./formError";
import firebase from "./firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passTwo: "",
      errorMessage: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({ [itemName]: itemValue }, () => {
      if (this.state.password !== this.state.passTwo) {
        this.setState({ errorMessage: "Passwords not match" });
      } else {
        this.setState({ errorMessage: null });
      }
    });
  }

  handleSubmit(e) {
    var registrationInfo = {
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.password
    };
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        this.props.registerUser(registrationInfo.displayName);
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message });
        } else {
          this.setState({ errorMessage: null });
        }
      });
  }

  render() {
    return (
      <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Register</h3>
                  <div className="form-row">
                    {this.state.errorMessage !== null ? (
                      <FormError theMessage={this.state.errorMessage} />
                    ) : null}
                    <section className="col-sm-12 form-group">
                      <label
                        htmlFor="displayName"
                        className="form-control-label sr-only"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="displayName"
                        placeholder="Display Name"
                        name="displayName"
                        required
                        value={this.state.displayName}
                        onChange={this.handleChange}
                      />
                    </section>
                  </div>
                  <section className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </section>
                  <div className="form-row">
                    <section className="col-sm-6 form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </section>
                    <section className="col-sm-6 form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="passTwo"
                        placeholder="Repeat Password"
                        name="passTwo"
                        required
                        value={this.state.passTwo}
                        onChange={this.handleChange}
                      />
                    </section>
                  </div>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Register
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

export default Register;
