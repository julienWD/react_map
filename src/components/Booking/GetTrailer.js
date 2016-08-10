import React from 'react';
import { Col } from 'react-bootstrap';
import trailerData from '../../data/trailerData.json';
import GetDataFromJson from './GetDataFromJson';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

let temp = [];
let newId = false;
let idNew = null;
// Component for the trailer for the choosen location
class GetTrailer extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      trailerId: 0, // ID -> for choosen trailer
      trailer:[], // saves information about the trailer
      json: [], // will get the server array
      pressed: []  // saves the button from the chosen trailer
   }
  }
  componentWillMount() {
    const { bookingView } = this.props;
    //sets this component at the bokking View component
    bookingView.setTrailerCom(this);
  }
  // by id change ... create new trailer
  setIdNew(id) {
    newId = true;
    idNew = id;
    this.createJson();
  }
  // create the server url for the information about the location
  createJson() {
    const { bookingHome } = this.props;
    const { bookingView } = this.props;
    let url = '';
    const dateLabelS = this.createDate(bookingHome.state.datePickUp);
    const dateLabelE = this.createDate(bookingHome.state.dateReturn);
    let { id } = this.props;
    // if id changed
    if (newId == true) {
      id = idNew;
    }
    // you need the start date, return date and location id
    url = 'http://52.18.171.117/api/website/location/capacity/' +
                         dateLabelS  + '/' +
                         dateLabelE + '/' + id;
    const temp = this;
    newId = false;
    // if you change
    if (this.state.pressed.length !== 0) {
        // change the other trailer to unpicked
        this.handleClose();
    }
    // get the data ... by success take the data and load the trailer / by error nothing
    GetDataFromJson(url).then(function (successResponse) {
      temp.state.json = successResponse;
      if (bookingView.state.trailerLoading !== null) {
        // stops the loading
        bookingView.setTrailerLoading();
      }
      temp.createTrailer();
    }, function () {
      // some Error Message
    });
  }
  // closes the card if a card is open
  handleClose() {
      // get all button and click the button with the text SELECT, after this break
      let temp = document.getElementsByTagName('button');
      for(let i = 0; i < temp.length; i ++) {
        if(temp[i].textContent === 'SELECTED') {
          temp[i].click();
          break;
        }
      }
  }
  // handles the case that you clicked a trailer
  handleTrailer(event) {
    const { bookingView } = this.props;
    // if the color = rgb(46, 198, 140) --> unclicked!
    if (event.currentTarget.style.backgroundColor === 'rgb(46, 198, 140)') {
      // if this array is not empty - a other trailer was picked before
      if (this.state.pressed.length !== 0) {
          // change the other trailer to unpicked
          this.state.pressed[0].textContent = 'RESERVE';
          this.state.pressed[0].style.color = 'white';
          this.state.pressed[0].style.backgroundColor = '#2EC68C';
          this.state.pressed[0].style.fontWeight = 'bold';
          this.state.pressed = [];
      }
      // push this trailer to the array
      this.state.pressed.push(event.currentTarget);
      // expand to the timer picker
      this.handleClose();
      // changes the text of the picked trailer to 'selected'
      event.currentTarget.textContent = 'SELECTED';
      event.currentTarget.style.color = 'white';
      event.currentTarget.style.backgroundColor = '#206040';
      event.currentTarget.style.fontWeight = 'bold';
      // open the first card - show/ load the timer
      // set the picked trailer
      bookingView.setTrailer(event.currentTarget.id)
      bookingView.handleExpandChange(true);
    } else {
      //if a trailer should be unpicked
      // create en empty array
      this.state.pressed = [];
      event.currentTarget.textContent = 'RESERVE';
      event.currentTarget.style.color = 'white';
      event.currentTarget.style.backgroundColor = '#2EC68C';
      // hide the timer picker
      bookingView.setTrailer(-1);
      bookingView.handleExpandChange(false);
    }
  }
  // Add the trailer to the location
  createTrailer(){
    temp = [];
    this.state.trailer = [];
    // become the local json for the trailer
    const dataForTrailer = trailerData;
    // style for the trailer image
    const l = this.state.json.length;
    // loop through the different trailer - if location has the trailer
    for(var i = 0; i<l;i=i+1){
      // looks if the trailer is there
      let tempIndex = _.findIndex(dataForTrailer, ['trailer', this.state.json[i].FKProductID]);
      // by index = -1 -> trailer not at this location
      if(tempIndex != -1){
        // if trailer is there - push to array
        temp.unshift(
          <Col xs={4} sm={3} key={i} style={{ textAlign: 'center'}}>
            <img src={'../images/trailer/' + dataForTrailer[tempIndex].image } id={'Image' + dataForTrailer[tempIndex].trailer}/>
            <RaisedButton
              id = {dataForTrailer[tempIndex].trailer}
              label = "Reserve"
              labelColor = 'white'
              labelStyle={{textAlign: 'center', padding: 0}}
              backgroundColor = '#2EC68C'
              onClick={this.handleTrailer.bind(this)}
              style = {{marginTop: 10, width: '100%'}} >
            </RaisedButton>
          </Col>);
      }
    }
    // if there is no trailer, add that this is a new location
    if (temp.length == 0) {
      temp.push(<Col xs={12} sm={3} key={i} style={{marginTop: '20px', textAlign: 'center'}}>
          <h5>
            This is a new location! At the moment we have no freetrailer here!
          </h5>
        </Col>
      );
    }
    // update after data is there
    this.setState({ trailer: temp });
  }
  // create the date string for the url
  createDate(setDate) {
    // will return a string for the choosen date
    const date = setDate;
    let string = '';
    const year = date.getFullYear();
    // + 1 , because the months starts by 0
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    // gives a string --> YYYY-MM-DD
    string = `${year}-${month}-${day}`;
    return string;
  }
  render() {
    return(
      <div>
        <Col xs={12 - (this.state.trailer.length * 4)} sm={9 - (this.state.trailer.length * 3)} />
          {this.state.trailer}
      </div>
    );
  }
}
export default GetTrailer;
