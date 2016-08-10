import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TimerPickerStart from './TimerPickerStart';
import TimerPickerEnd from './TimerPickerEnd';
import GetTrailer from './GetTrailer';
import Divider from 'material-ui/Divider';

let time = null;  // for the timeout - if a state is unmount

class BookingView extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      startD: null, // Start Date - type date
      endD: null, // End Date - type date
      endThis: null,  // holds the TimepickerEnd-Component - for using it functions
      startThis: null,  // holds the TimepickerStart-Component - for using it functions
      startTime: -1,  // saves the set start time - type number
      endTime: -1,
      startValue: '', // saves the choosen start Time - type String (hh:mm)
      endValue: '', // saves the choosen end Time - type String (hh:mm)
      startDateLabel: 'a',  // saves the start date - type string (year-month-day)
      endDateLabel: 'b',  // saves the end date - type string (year-month-day)
      hover: false, // if i am over a location - type boolean
      temp: 1,  // the grade of the shadow by hover - type number
      pickUp: null, // saves the pickup times for the day - type array
      trailerId: -1,  // saves the picked trailer - type number
      trailerCom: null, // contains the gettrailer component
      id: null,   // location id
      blueBorder: {border: 0, margin: 10} // blueborder for the card by hover
   }
  }
  componentWillMount() {
    const { bookingHome } = this.props;
    const { id } = this.props;
    this.state.id = id;
    this.state.startD = bookingHome.state.datePickUp;
    this.state.endD = bookingHome.getReturnDate();
    this.state.trailerLoading = (<Col xs={9} style={{ textAlign: 'center' }} >
      <CircularProgress size={1}
        style={{ opacity: 1.0 }}
      />
    </Col>);
  }
  // Mouse hovers over the card
  mouseOver() {
    this.setState({hover:true, temp:2});
    this.state.blueBorder = {border: '1px solid #3f8cce', margin: 10};
  }
  // Mouse leaves the card
  mouseOut() {
    this.setState({hover:false, temp:1});
    this.state.blueBorder = {border: 0, margin: 10};
  }
  // change the expanded variable for the first Card (Pick Trailer)
  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }
  // change the axpanded variable for the second Card (Pick Time)
  handleExpandChangeSec(expanded){
    this.setState({expandedSec: expanded});
  }
  // Looks if start end return time were picked --> If Startvalue changed!
  checkTimeS(value) {
    // if start or return time is empty (nothing picked) ...
    if (this.state.endValue === '' || value === '') {
      // .. dont expand second card
      this.setState({ expandedSec: false });
    } else {
      // ... else expand second card
      this.setState({ expandedSec: true });
    }
  }
  // Looks if start end return time were picked --> If Endvalue changed!
  checkTimeE(value) {
    if (this.state.startValue === '' || value === '') {
      this.setState({ expandedSec: false });
    } else {
      this.setState({ expandedSec: true });
    }
  }
  // looks if start label is now bigger then end label
  checkEndValue(value) {
    // if end label smaller start label (14:00 < 18:00)
    if (this.state.endValue <= value) {
      // reset end label
      this.setState({ endValue: '' });
      this.setState({ expandedSec: false });
      // if end time exists ... reset the return timer
      if (this.state.endThis !== null) {
        this.state.endThis.resetTime();
      }
    } else {
      this.checkTimeS(value);
    }
  }
  // set the Date Label (Mon 12 Jun)
  setLabel(start, end) {
    this.setState({ startDateLabel: start });
    this.setState({ endDateLabel: end });
  }
  // for using functions from the TimerPickerStart
  setThisStart(context) {
    this.setState({ startThis: context });
  }
  // for using functions from the TimerPickerEnd
  setThisEnd(context) {
    this.setState({ endThis: context });
  }
  // sets the start date
  setStartDate(date) {
    this.setState({ startD: date });
    this.checkDate(true);
  }
  // sets the end date
  setEndDate(date) {
    this.setState({ endD: date });
    this.checkDate(false);
  }
  // looks if a start time was choosen
  setStartTime(value) {
    this.setState({ startTime: value });
    // if start date & return date are the same ...
    if (this.state.startDateLabel === this.state.endDateLabel) {
      this.state.endThis.handleTimerPicker(this.state.pickup, value);
    }
  }
  setEndTime(value) {
    this.setState({ endTime: value });
  }
  // sets the start Value - Time Label (hh:mm)
  setStartValue(value) {
    this.setState({ startValue: value });
    this.checkEndValue(value);
  }
  // sets the end Value - Time Label (hh:mm)
  setEndValue(value) {
    this.setState({ endValue: value });
    this.checkTimeE(value);
  }
  // sets the picked Trailer
  setTrailer(value) {
    const { bookingHome } = this.props;
    // looks if a trailer would change ( from 9 to 14 fe)
    if ( this.state.trailerId !== value && this.state.trailerId !== -1 && value !== -1){
      this.state.trailerId = value;
        //this.setState({ trailerId: value });

        // if that is the case - refresh both timer
        if (this.state.startThis !== null) {
          this.state.startThis.refreshTimer();
          this.state.endThis.refreshTimer();
        }
    } else if (value == -1) {
      this.state.startD = bookingHome.state.datePickUp;
      this.state.endD = bookingHome.state.dateReturn;
    } else {
      this.state.startD = bookingHome.state.datePickUp;
      this.state.endD = bookingHome.state.dateReturn;
      this.setState({ trailerId: value });
    }
  }
  // saves the array for the pick up times - no need to call getJson again
  setPickUp(value) {
    this.setState({ pickup: value });
  }
  // looks if start date becomes bigger then return date
  checkDate(bool) {
    // if start date changes and become bigger then end date ...
    if (this.state.startD > this.state.endD && bool === true) {
      // add one day to end date
      this.state.endThis.addOneDay();
    // if end date changes and become smaller then start date ...
    } else if (this.state.startD > this.state.endD && bool === false) {
      // decrease the start date by one day
      this.state.startThis.minusOneDay();
    // if the start date changes and become the same date like the end date...
    } else if (this.state.startDateLabel === this.state.endDateLabel && bool === true) {
      // refresh the end time
      this.state.endThis.refreshTimer();
    }
  }
  // set getTrailer component
  setTrailerCom(context) {
    this.state.trailerCom = context;
    // timeout for the case that you will get an unmounted state
    time = setTimeout(this.state.trailerCom.createJson(), 200);
  }
  componentWillUnmount() {
    // if unmounted clear the timer and dont call the function
    clearTimeout(time);
  }
  componentDidMount() {
    // save this component in the parent component - BookingHome
    const { bookingHome } = this.props;
    bookingHome.setBookingView(this);
  }
  // If the id changes calculate the trailer new
  componentWillReceiveProps(nextProps) {
    if (this.state.id !== nextProps.id || nextProps.id == 80) {
      this.state.trailerCom.setIdNew(nextProps.id);
    }
  }
  // get the return date
  getDate() {
    return this.state.endD;
  }
  // if called -> stop the loading for the trailer
  setTrailerLoading() {
    this.setState({ trailerLoading: null });
  }
  render() {
    // variables with all importent information about the location
    const { name } = this.props;
    const { street } = this.props;
    const { plz } = this.props;
    const { id } = this.props;
    const { city } = this.props;
    const { bookingHome } = this.props;

    const styleReservePart = {
      textAlign : 'center',
      marginBottom : 10
    };
    // if there is only a difference from one hour (pickup and return) set a warning
    if ((this.state.endTime - this.state.startTime) == 1 && this.state.startDateLabel == this.state.endDateLabel) {
      this.state.alert = (<Col xs={12} md={4} style={{textAlign: 'center'}}>
        <p style={{ backgroundColor: '#fcf8e3',
          textAlign: 'center',
          color: '#8a6d3b',
          borderStyle: 'solid',
          borderWidth: 1.0,
          borderColor: '#faebcc',
          padding: 10,
          fontSize: '16px'
        }}>
          OBS! Du har kun valgt en times lejeperiode. Er du sikker på at du vil fortsætte?
        </p>
      </Col>)
    } else {
      // else nothing
      this.state.alert = <Col xs={12} md={4} />;
    }
    return (
      <div>
        <Card
          expanded={this.state.expanded}
          zDepth={this.state.temp}
          onMouseOver={this.mouseOver.bind(this)}
          onMouseOut={this.mouseOut.bind(this)}
          style={ this.state.blueBorder }
          id={id + 'BookingView'}
        >
          <CardHeader
            style={{padding: 0, height: 0}}
            actAsExpander={false}
          />
          <CardText>
            <Grid style={{width: '100%'}}>
              <Row>
                <Col xs={12} sm={3}>
                  <h4> { name } </h4>
                  <div><span>{street}</span><br /><span>{plz + ', ' + city}</span> </div>
                </Col>
                {this.state.trailerLoading}
                <GetTrailer id={id} bookingView={this} bookingHome={bookingHome} test={true}/>
              </Row>
            </Grid>
          </CardText>

          <CardText expandable={true}>
            <Card expanded={this.state.expandedSec}>
              <CardHeader
                style={{padding: 0, height: 0}}
                actAsExpander={false}
              />
              <CardText style={{ paddingBottom: 0}}>
                <Grid style={{width: '100%'}}>
                  <Row>
                    <Col xs={12} >
                      <Col xs={12} sm={6}>
                        <h4 style={styleReservePart}> AFHENTNING </h4>
                        <TimerPickerStart
                          bookingView={this}
                          bookingPick={this.state.startD}
                          locationId={id}
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <h4 style={styleReservePart}> AFLEVERING </h4>
                        <TimerPickerEnd
                          bookingView={this}
                          bookingReturn={this.state.endD}
                          locationId={id}
                        />
                      </Col>
                    </Col>
                  </Row>
                </Grid>
              </CardText>
              <CardText expandable={true} style={{ paddingTop: 0}}>
                <Grid style={{width: '100%'}}>
                  <Row style={{marginTop: '5px'}}>
                    <Divider style={{marginBottom: '25px'}}/>
                    <Col xs={12} md={4} style={{textAlign: 'center'}}>
                      <p><strong>Du har valgt en freetrailer:</strong><br />
                      {'fra ' + this.state.startDateLabel + '  /  ' + this.state.startValue}
                      <br />
                      {'til ' + this.state.endDateLabel + '  /  ' + this.state.endValue}
                      </p>
                    </Col>
                    {this.state.alert}
                    <Col xs={12} md={4} style={{textAlign: 'center'}}>
                      <RaisedButton
                        label = "Reserver din freetrailer..."
                        labelColor = 'white'
                        labelPosition = 'before'
                        backgroundColor = '#2EC68C'
                        style={{marginTop: '10px', textDecoration: 'none'}}
                        onClick={() => document.removeEventListener('scroll', bookingHome.scrollFuntion)}
                        linkButton= {true}
                        href={'#/book-e-trailer/' +
                          id + '/' + this.state.trailerId + '/' +
                          this.state.startDateLabel + ' ' +
                          this.state.startValue + '/' +
                          this.state.endDateLabel + ' ' +
                          this.state.endValue
                        }
                      />
                    </Col>
                  </Row>
                </Grid>
              </CardText>
            </Card>
          </CardText>
        </Card>
      </div>
    );
  }
}
export default BookingView;
