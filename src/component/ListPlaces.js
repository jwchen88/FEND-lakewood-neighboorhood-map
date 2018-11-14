import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Place from './Place.js'
import escapeRegExp from 'escape-string-regexp'

export class ListPlaces extends Component {
  static PropTypes = {
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
      <div className="place-list">
        <div className="search">
          <input
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
              place={place}
              //onClick={this.props.onClick}
              key={place.id}
            />
          )
        })}
      </div>
    )
  }
}


export default ListPlaces
