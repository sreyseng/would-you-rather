import React, { Component } from 'react';
import Navbar from './navbar';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}
export default App;
