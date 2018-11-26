import React, { Component } from "react";
import PropTypes from "prop-types";
import Place from "./Place.js";

export class ListPlaces extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="place-list">
        <div className="search">
          <input
            aria-label="search restaurants"
            className="search-restaurant"
            type="text"
            placeholder="Search"
            value={this.props.query}
            onChange={event => this.props.updateQuery(event.target.value)}
          />
        </div>
        {this.props.showingPlaces.map(place => {
          return (
            <Place
              key={place.id}
              place={place}
              onMarkerClick={this.props.onMarkerClick}
            />
          );
        })}
      </div>
    );
  }
}

export default ListPlaces;
