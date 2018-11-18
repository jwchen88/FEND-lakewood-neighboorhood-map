import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from '../utils/GoogleApi'
import Sidebar from './Sidebar.js'

export class MapContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      places:[],
      pagination: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
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

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onClose = props => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  renderMarkers() {
    if(!this.state.places){ return null; }
    return this.state.places.map(place =>{
      return <Marker
        key={place.id}
        onClick={this.onMarkerClick}
        name={place.name}
        place={place}
        rating={place.rating}
        vicinity={place.vicinity}
        position={place.geometry.location}
             />

    })
  }

  render() {
    return (
      <div>
        <Sidebar
          title={'Restaurants'}
          onListItemClick={this.onMarkerClick.bind(this)}
          places={this.state.places}
        />

        <div className="map">
          <Map
            style={{height:'100%', width:'75vw', position: 'absolute'}}
            onReady={this.onReady.bind(this)}
            google={this.props.google}
            initialCenter={{
              lat: 32.8124432,
              lng: -96.7514695
            }}
            zoom={16}
          >

            {this.renderMarkers()}

            <InfoWindow
              key= {this.state.selectedPlace.id}
              marker = {this.state.activeMarker}
              visible = {this.state.showingInfoWindow}
              onClose = {this.onClose}>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <p>Rating: {this.state.selectedPlace.rating}</p>
                <p>Address: {this.state.selectedPlace.vicinity}</p>
              </div>
            </InfoWindow>

          </Map>
        </div>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYV2FOC1UKAKyjIAibNXtcKLVb9Wo1VWU'
})(MapContainer)
