import React, { Component } from "react";
import firebase from "./firebase";
import FormError from "./formError";
import { navigate } from "@reach/router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({
      [itemName]: itemValue
    });
  }

  handleSubmit(e) {
    var loginInfo = {
      email: this.state.email,
      password: this.state.password
    };
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(() => {
        navigate("/meetings");
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
      <form action="" className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Log in</h3>
                  <section className="form-group">
                    {this.state.errorMessage !== null ? (
                      <FormError theMessage={this.state.errorMessage} />
                    ) : null}
                    <label
                      htmlFor="Email"
                      className="form-control-label sr-only"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </section>
                  <section className="form-group">
                    <label
                      htmlFor="password"
                      className="form-control-label sr-only"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </section>
                  <div className="form-group text-right mb-0">
                    <button type="submit" className="btn btn-primary">
                      Log in
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

export default Login;
