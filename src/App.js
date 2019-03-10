import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render(){
      return(
        <Router>
          <Sidebar/>
        </Router>
      )
  }
}

export default App;

