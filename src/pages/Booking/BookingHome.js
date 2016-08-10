import React from 'react';
import { Col } from 'react-bootstrap';
import CircularProgress from 'material-ui/CircularProgress';
import BookingView from '../../components/Booking/BookingView';
import MapView from '../../components/GoogleMaps/MapView';
import BookingSearch from '../../components/BookingSearch/BookingSearch';
import InformationLink from '../../components/Booking/InformationLink';
import './test.css';

//start point for how many locations you will show at the beginning
let infinite = 20;  // type: number
//show loading ... yes or no (of more locations)
let load = null;    // contains the loading -> type:tag-element
let temp = null;
class BookingHome extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      data: null,
      map: null,                    // contains the map-component
      datePickUp: new Date(),       // saves the pickup date -> type: date
      dateReturn: new Date(),       // saves return date -> type: date
      bookingView: [],              // contains the bookingView components -> type: array of components
      isInfiniteLoading: true,      // looks if you should show the loading
      locations: [],                // array of current locations -> type: array with objects
      allLocations: []              // array of all locations -> type: array with objects
    }
  }
  componentDidMount() {
    this.handleLocations(); // sets the locations
    temp = this;  // save THIS component so that you can use it in the listener
    // Listener who watches, when somebody scrolls
    document.addEventListener('scroll', this.scrollFuntion);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollFuntion);
  }
  scrollFuntion(event) {
    // start loading in this case 600px befor you come to the bottom
    let earlyPop = 600;
    let height = temp.getDocHeight() - earlyPop; // get height minus difference
    let scroll = temp.getScrollXY()[1] + window.innerHeight; // looks where the scroll is
    // if you reach the point ...
    if (height <= scroll) {
      temp.infiniteScroll();
    }
  }
  // start infinite load
  infiniteScroll(){
      if(this.state.isInfiniteLoading){ // if true ..
        // add loading elements to this variable
        load = (<Col xs={12} style={{ textAlign: 'center' }} >
          <CircularProgress size={1} />
        </Col>);
        // change this variable to false ... otherwise this function will be called to often
        this.setState({ isInfiniteLoading: false });
      }else{
        return;
      }
      this.handleInfiniteLoad(); // call function, which adds locations
  }
  //Start of function used to find when at the bottom of the page
  getScrollXY() {
    var scrOfX = 0, scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
      scrOfY = window.pageYOffset;
      scrOfX = window.pageXOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
      //DOM compliant
      scrOfY = document.body.scrollTop;
      scrOfX = document.body.scrollLeft;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
      //IE6 standards compliant mode
      scrOfY = document.documentElement.scrollTop;
      scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
  }
  // Get the height of the page (max height)
  getDocHeight() {
    var D = document;
    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
      );
  }
  // will be called from map component, if locations change
  setData(dataD) {
    infinite = 20;  // set infinite back to start value -> so many locations
    this.handleClose(); // close trailer if open
    this.handleLocations(); // create new locations
    this.setState({ data: dataD }); // set a state to render all
    document.getElementById('scrollAnchor').scrollIntoView(false);  // scroll to the top
  }
  // set the map-component
  setMap(maps) {
    this.setState({ map: maps });
  }
  // set the pickup date
  setPickUpDate(value) {
    this.state.datePickUp = value;
  }
  // set the return date
  setReturnDate(value) {
    this.handleClose();
    this.setState({ dateReturn: value });
    document.getElementById('scrollAnchor').scrollIntoView(false);
    infinite = 20;
  }
  // for closing the card if there was a trailer picked
  handleClose() {
      // get all Buttons
      let temp = document.getElementsByTagName('button');
      for(let i = 0; i < temp.length; i ++) {
        // if you find a SELECTED button ...
        if(temp[i].textContent === 'SELECTED') {
          temp[i].click();  // click the button
          break;  // stop the search -> it gives only one button
        }
      }
  }
  // gives you the return date
  getReturnDate() {
    return this.state.dateReturn;
  }
  // add bookingview component to the array
  setBookingView(context) {
    this.state.bookingView.push(context);
  }
  // function for adding locations if you want to load more
  handleInfiniteLoad() {
    let temp = this;
    let l = this.state.locations.length;
    setTimeout(function() { // timeout only to show the user that something happened
      // add 20 locations every loading period
      temp.state.locations = temp.state.allLocations.slice(0, l+20);
      load = null;
      temp.setState({ isInfiniteLoading: true});
    }, 1500); // wait 1,5 sec
  }
  // get the value of the partner you want to see - change this then in map-comp
  setFilterValue(value) {
    this.state.map.setFilterValue(value);
    this.state.map.componentDidMount();
  }
  // sets the locations at the beginning
  handleLocations() {
    let temp = this;
    if (this.state.map !== null) {  // if the map-component exists ...
      // map all locations in this variable
      temp.state.allLocations = this.state.map.state.sortedLocation.map(function(locationsTemp , i) {
        return <BookingView key={i}
          id = {locationsTemp.LokationID}
          name={locationsTemp.LokationName}
          street={locationsTemp.LokationAdresse_1}
          plz ={locationsTemp.LokationPostnr}
          city={locationsTemp.LokationBy}
          bookingHome={ temp }
        />
      });
      // add just the first 20 to the array you show
      this.state.locations = this.state.allLocations.slice(0, infinite);
    }
  }
  // render 4 components
  // 1. Google Map components
  // 2. Searchbar with "Enter Location", date picker and partner filterValue
  // 3. Information Links at the top
  // 4. the current locations
  render() {
    return (
      <Col xs={12}>
        <Col md={4} style={{padding: 0, position: 'fixed', top: '83px', borderRight: '1px solid #8aa1c5'}}>
          <MapView booking={this} address={this.props.params.address}/>
        </Col>
        <Col className='bookingSearch' xs={12} md={8} mdOffset={4}
          id="searchBar"
          style={{position: 'fixed',
            top: '83px',
            zIndex: '100',
            backgroundColor: '#ecf5f4',
            boxShadow: '0px 3px 3px rgba(0,0,0,0.2)'}}>
          <BookingSearch booking={this} />
        </Col>
        <Col xs={12} md={8} mdOffset={4} style={{top: '180px', float: 'right', paddingRight: '50px'}}>
          <InformationLink />
        </Col>
        <Col xs={12} md={8} mdOffset={4} style={{ marginTop: '170px', zIndex: '1' }}>
            { this.state.locations }
            { load }
        </Col>
      </Col>
    );
  }
}
export default BookingHome;
