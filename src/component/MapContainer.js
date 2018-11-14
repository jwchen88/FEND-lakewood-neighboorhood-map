import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from '../utils/GoogleApi'
import Sidebar from './Sidebar.js'

export class MapContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      places:[],
      pagination: null
    }
  }

  onReady(mapProps, map){
    const {google} = this.props;
    const opts = {
      location: {lat:32.8124432, lng:-96.7514695},
      radius: '500',
      type: ['restaurant']
    }
    searchNearby(google, map, opts)
    .then((results, pagination) => {
      this.setState({
        places: results,
        pagination
      })
    })
    .catch((status, result) => {

    })
  }

  renderMarkers() {
    if(!this.state.places){ return null; }
    return this.state.places.map(place =>{
      return <Marker
        key={place.id}
        name={place.id}
        place={place}
        position={place.geometry.location}
      />
    })
  }

  render() {
    return (
      <div>
        <Map
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          initialCenter={{
            lat: 32.8124432,
            lng: -96.7514695
          }}
          zoom={15}
        >

          {this.renderMarkers()}

          <Sidebar
            title={'Restaurants'}
            //onListItemClick={this.onMarkerClick.bind(this)}
            places={this.state.places}
          />

          {/*
            <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
            <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          */}

        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYV2FOC1UKAKyjIAibNXtcKLVb9Wo1VWU'
})(MapContainer)
