import React, { Component } from "react";

import Home from "./components/home";
import Welcome from "./components/welcome";
import Navigation from "./components/navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        <main className="container">
          {this.state.user && <Welcome user={this.state.user} />}
          <Home user={this.state.user} />;
        </main>
      </div>
    );
  }
}

export default App;
