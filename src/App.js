import React, { Component } from "react";

import Home from "./components/home";
import Welcome from "./components/welcome";
import Navigation from "./components/navigation";
import Login from "./components/login";
import Register from "./components/register";
import Meetings from "./components/meetings";
import { Router } from "@reach/router";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Thines"
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        <main className="container">
          {this.state.user && <Welcome user={this.state.user} />}
          <Router>
            <Home path="/" user={this.state.user} />
            <Login path="/login" />
            <Register path="/register" />
            <Meetings path="/meetings" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
