import React, { Component } from 'react';
import './App.css';
import Appbar from './components/Appbar';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
     <div>
      <Appbar />
      <Products />
     </div>
     
    );
  }
}

export default App;
