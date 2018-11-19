import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Place from './Place.js'
import escapeRegExp from 'escape-string-regexp'

export class ListPlaces extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query})
  }

  render() {
    let showingPlaces
    if (this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingPlaces = this.props.places.filter((place) => match.test(place.name))
    } else {
      showingPlaces = this.props.places
    }

    return (
      <div className="place-list" aria-label="restaurant list">
        <div className="search">
          <input
            aria-label="search restaurants"
            className="search-restaurant"
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        {showingPlaces.map(place => {
          return (
            <Place
              key={place.id}
              place={place}
              onClick={this.props.onClick}
            />
          )
        })}
      </div>
    )
  }
}


export default ListPlaces
