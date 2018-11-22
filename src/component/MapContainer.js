import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
//import { searchNearby } from "../utils/GoogleApi";
import Sidebar from "./Sidebar.js";
import axios from 'axios'
import escapeRegExp from "escape-string-regexp";

export class MapContainer extends Component {
  state = {
    places: [],
    pagination: null,
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: [],
    markers: [],
    infoWindow: null,
    map: null,
    query: ""
  };

/*
  onReady(mapProps, map) {
    const { google } = this.props;
    const opts = {
      location: { lat: 32.8124432, lng: -96.7514695 },
      radius: "500",
      type: ["restaurant"]
    };
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination,
          map
        });
      })
      .catch((status, result) => {});
  }
  */

//get data from four square
  componentDidMount(){
    this.getVenues()
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?"
    const parameters = {
      client_id: "HHUV2BREYTPF4NC4ANOYCCROTNLB4FQATM4TVC4ULI4DUA0T",
      client_secret: "B3Y3MCPEXNGDF5U03GJON1J10JIZIQIO05WAYQFO1GLPJUH0",
      radius: "500",
      limit: "20",
      categoryId: "4d4b7105d754a06374d81259",
      ll: "32.8132922, -96.7521698",
      v: "20181111"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        places: response.data.response.venues
      })
    })
    .catch(error => {
      console.log("Error!" + error)
    })
  }

//Click on a Marker
  onMarkerClick = (props, marker, e) => {
    this.killAnimation();
    const { map, infoWindow } = this.state;
    //Change the content
    this.state.infoWindow.setContent(`
      <div>
      <h4>${props.name}</h4>
      <p>Address: ${props.address}</p>
      </div>
    `);
    //Open An InfoWindow
    if (marker !== undefined) {
      infoWindow.open(map, marker);
    } else {
      this.state.markers.map(marker => {
        if (props.name === marker.name) {
          infoWindow.open(map, marker);
        }
      });
    }
  };

  componentWillMount = () => {
    const infoWindow = new window.google.maps.InfoWindow();
    this.setState({
      infoWindow
    });
  };

  killAnimation = () => {
    this.state.markers.map(marker => marker.setAnimation(null));
  };

  refs = [];

  addRefs = elem => {
    this.setState(
      prevState => ({
        markers: [...prevState.markers, elem.marker]
      }),
      () => console.log(this.state.markers)
    );
  };

  updateQuery = query => {
    this.setState({ query: query });
  };

  render() {
    let showingPlaces;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      showingPlaces = this.props.places.filter(place => match.test(place.name));
    } else {
      showingPlaces = this.props.places;
    }

    return (
      <div>
        <Sidebar
          title={"Restaurants"}
          onListItemClick={this.onMarkerClick.bind(this)}
          places={this.state.places}
        />

        <div className="map">
          <Map
            style={{ height: "100%", width: "75vw", position: "absolute" }}
            //onReady={this.onReady.bind(this)}
            google={this.props.google}
            initialCenter={{
              lat: 32.8124432,
              lng: -96.7514695
            }}
            zoom={16}>
            {this.state.places.map(place => {
              return (
                <Marker
                  key={place.id}
                  ref={this.addRefs}
                  onClick={this.onMarkerClick}
                  name={place.name}
                  place={place}
                  //rating={place.rating}
                  address={place.location.formattedAddress}
                  position={{
                    lat: place.location.lat,
                    lng: place.location.lng
                  }}
                />
              );
            })}
            {this.state.showingInfoWindow ? this.makeInfoWindow() : null}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAYV2FOC1UKAKyjIAibNXtcKLVb9Wo1VWU"
})(MapContainer);
