import React, { Component } from "react";
import ListPlaces from "./ListPlaces.js";

export class Sidebar extends Component {
  onClick(place, map, google) {
    if (this.props.onListItemClick) {
      place.place = place;
      this.props.onListItemClick(place, map, google);
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">
          <h2 tabIndex="0">{this.props.title}</h2>
        </div>
        <ListPlaces
          places={this.props.places}
          onMarkerClick={this.props.onMarkerClick}
          updateQuery={this.props.updateQuery}
          showingPlaces={this.props.showingPlaces}
          query={this.props.query}
        />
      </div>
    );
  }
}

export default Sidebar;
