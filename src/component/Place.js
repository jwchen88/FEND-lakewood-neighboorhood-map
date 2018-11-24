import React, { Component } from "react";

export class Place extends Component {
  render() {
    const { place } = this.props;
    return (
      <div className="place" onClick={() => this.props.onMarkerClick(place)}>
        <h3 tabIndex="0" aria-label="restaurant name" role="listitem">{place.name}</h3>
      </div>
    );
  }
}

export default Place;
