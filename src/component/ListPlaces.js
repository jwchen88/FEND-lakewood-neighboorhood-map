import React, { Component } from "react";
import PropTypes from "prop-types";
import Place from "./Place.js";
import escapeRegExp from "escape-string-regexp";

export class ListPlaces extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired
  };

  state = {
    query: ""
  };

  updateQuery = newQuery => {
    this.setState({ query: newQuery });
    this.props.filterPlaces(newQuery)
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
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {this.props.filtered.map(place => {
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
