import React, { Component } from "react";
import "./App.css";
import MapContainer from "./component/MapContainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" role="banner">
          <h1 tabIndex="0">Lakewood Neighboorhood Map</h1>
        </header>
        <MapContainer />
      </div>
    );
  }
}

export default App;
