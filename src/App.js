import React, { Component } from 'react';
import './App.css';
import MapContainer from './component/MapContainer.js'
import Sidebar from './component/Sidebar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lakewood Neighboorhood Map</h1>
        </header>
        <MapContainer/>
        <Sidebar
          title={'Restaurants'}
          //places={this.state.places}
        />
      </div>
    );
  }
}

export default App;
