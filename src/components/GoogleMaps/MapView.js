import React from 'react';
import { Col } from 'react-bootstrap';
import location from '../../data/location.json';
// starting location
const INITIAL_LOCATION = {
  address: 'Kopenhagen, Denmark',
  position: {
    latitude: 55.6713442,
    longitude: 12.4907994
  }
};
// standart zoom
const INITIAL_MAP_ZOOM_LEVEL = 12;
// random coords
const ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};

let data = [];  // holds all location with coordinations
// This Component is a little bit different to the other components,
//because i mostly used the code from the google developer api
var MapView = React.createClass({
  getInitialState: function () {
    return {
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address,
      sortedLocation: [],       // contains all locations -> type: array of objects
      bookingView: null,        // contains the bookingview component
      filterValue: 999,         // holds the value for the filter -> type: number
      location: null
    };
  },
  // become all lat & lng from the location json
  getLocationCoord(){
    data = [];
    this.state.sortedLocation = [];
    let temp = [];
    const l = location.length;
    // get all if the filter says all (value = 999) ...
    if (this.state.filterValue == 999) {
      temp = location.slice();
    } else {
      // else only add the partner to the array we need
      for (let i = 0; i < l; i ++) {
        if (location[i].PartnerID == this.state.filterValue) {
          temp.push(location[i]);
        }
      }
    }

    let len = temp.length;
    // look if each location has coordinates
    for (let i = 0; i < len; i ++) {
      if(temp[i].LokationMapURL){
        let mapsCoord = temp[i].LokationMapURL; // get coords
        let split = mapsCoord.split("'");       // split them
        let value1 = parseFloat(split[1]);      // get lat and parse to float
        let value2 = parseFloat(split[3]);      // same with lng
        if (isNaN(value1) || isNaN(value2)){    // if you have no numbers
          //if location has no coordinates
        } else {  // else create everything you need for your location
          let obj = {
            lat: value1,
            lng: value2,
            title: temp[i].LokationName,
            street: temp[i].LokationAdresse_1,
            plz: temp[i].LokationPostnr,
            city: temp[i].LokationBy,
            id: temp[i].LokationID
          }
          this.state.sortedLocation.push(temp[i]); // all data
          data.push(obj); // just the data you need
        }
      }
    }
  },
  // finds the location by using the location name
  geocodeAddress: function (address) {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {

        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        });
        // set new center of the page
        this.map.setCenter(results[0].geometry.location);
        this.map.setZoom(12);
        // calculate new distances of the locations
        this.calculateDistance(this.map.getCenter().lat(), this.map.getCenter().lng());
        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

      this.map.setCenter({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });
    }.bind(this));

  },
  // Clculation for the distance between location and center of view
  calculateDistance: function (latCenter, lngCenter) {
    const R = 6371;
    const l = this.state.sortedLocation.length;
    let latC = latCenter * Math.PI / 180;
    for (let i = 0; i < l; i ++) {
      for(let j = 0; j < data.length; j ++) {
        // if location from json is also in the new location array (with the coords)
        if (this.state.sortedLocation[i].LokationID == data[j].id) {
          // some calculations for the distance
          let latData = data[j].lat;
          let lngData = data[j].lng;

          let latDiv = (latData - latCenter) * Math.PI / 180;
          let lngDiv = (lngData - lngCenter) * Math.PI / 180;

          let temp =  0.5 - Math.cos(latDiv)/2 +
            Math.cos(latC) * Math.cos(latData * Math.PI / 180) *
            (1 - Math.cos(lngDiv))/2;

          let distance = R * 2 * Math.asin(Math.sqrt(temp));
          // add distance to the array (new field)
          this.state.sortedLocation[i].distanceToCenter = distance;
          break;
        }
      }
    }
    // sort after distance
    this.state.sortedLocation.sort(this.dynamicSort('distanceToCenter'));
    // give the new array the other components
    this.bookingView.setData(this.state.sortedLocation);
  },
  // function for sorting the array
  dynamicSort: function(property) {
    var sortOrder = 1;
    if(property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  },
  // before somthing else, do ...
  componentWillMount: function() {
    // create arraay with all location coords
    this.getLocationCoord();
    // save the parent component
    const {booking} = this.props;
    // save this component in parent component
    booking.setMap(this);
    this.bookingView = booking;
  },
  componentDidMount: function () {
    var mapElement = this.mapElement;
    // address from previous page and default
    const { address } = this.props;
    // create the map
    this.geocoder = new google.maps.Geocoder();
    let center = [];
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {
        // set new center of the page
        center.push(results[0].geometry.location.lat());
        center.push(results[0].geometry.location.lat());
      } else {

      }
    });
    this.map = new google.maps.Map(mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });
    // save the textfield (for autocomplete from google)
    let input = /** @type {!HTMLInputElement} */(
     document.getElementById('enterLocation'));
     // create autocomplete for textfield
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', this.map);

    var auto = this.geocodeAddress;
    // if the center changes ...
    autocomplete.addListener('place_changed', function() {
      // ... go to new location
      document.getElementById('scrollAnchor').scrollIntoView(false);
      var address = document.getElementById('enterLocation').value;
      auto(address);
    });
    // if the infowwindow from a other marker isn t open
    let preMarker = false;
    // create marker for the position of all freetrailer
    for (let i = 0; i < data.length; i ++) {
      this.marker = new google.maps.Marker({
        map: this.map,
        position: {
          lat: data[i].lat,
          lng: data[i].lng
        },
        title: data[i].title,
        icon: '../../images/marker.png'
      });
      // content for the info window for each marker
      let contentString = '<div><h5>'+ data[i].title + '</h5>' +
        '<p>' +  data[i].street  +'<br />'+ data[i].plz + ', ' + data[i].city +
        '</p>' +
        '<button type="button" ' +
        'onclick="document.getElementById(\''+data[i].id+'BookingView\').style.border = \'1px solid #3f8cce \' ;"' +
        'style="color: white; background-color: #2EC68C; border: 1px">Show</button>' +
        '</div>';
      // create the info window
      let infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      let tempMarker = this.marker;
      let calculate = this.calculateDistance;
      // by click at a marker
      google.maps.event.addListener(tempMarker, 'click', function(){
        //if was a infowindow open before ... close it
        if (preMarker) {
          preMarker.close();
        }
        // scroll to top ; set new Center and Zoom
        document.getElementById('scrollAnchor').scrollIntoView(false);
        this.map.setCenter(tempMarker.getPosition());
        this.map.setZoom(12);
        // calculate the distances new and change the order of the locations
        calculate(this.map.getCenter().lat(), this.map.getCenter().lng());
        // set the new infowindow; and open it
        preMarker = infowindow;
        infowindow.open(this.map, tempMarker);
      });
      // by click in the map, close info window
      this.map.addListener('click', function() {
        infowindow.close();
      });
    }
    // first time use the value from the previous page ; by default = copenhagen
    this.geocodeAddress(address);
    // calculate the distances
    this.calculateDistance(this.map.getCenter().lat(), this.map.getCenter().lng());

    let mapRef = this.map;
    let func = this.calculateDistance;
    // if you drag the map, calculate the distances new
    google.maps.event.addListener(mapRef,'dragend',function() {
      func(mapRef.getCenter().lat(), mapRef.getCenter().lng());
    });
  },
  // set the map
  setMapElementReference: function (mapElementReference) {
    this.mapElement = mapElementReference;
  },
  // sets the value for the chosen partner
  setFilterValue(value) {
    this.state.filterValue = value;
    this.getLocationCoord();

  },
  render: function () {
    return (
      <Col xs={12} style={{padding: 0}}>
        <div className="map" ref={this.setMapElementReference} style={{height: window.innerHeight - 83 + 'px'}}></div>
      </Col>
    );
  }
});

module.exports = MapView;
