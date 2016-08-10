import React from 'react';
import { Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';
import GetDataForTimerPicker from './GetDataForTimerPicker';
import ReturnDatePicker from './ReturnDatePicker';
import Loading from './Loading';

let whiteBackground = { opacity: 0.3 };

class TimerPickerStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getEndTime: [], // saves the endTime - - Buttons
      end: -1, // looks if a end time were choosen, and which
      id: '', // pick up time - type number
      label: '', // Label for the final return Time
      open: true, // boolean variable for the loading icon
      datePicker: null, // saves the ReturnDatePicker component
      endDateLabel: '', // date for return
      startDateLabel: '', // date for pick up
      alert: null
    };
  }
  componentWillMount() {
    this.handleEmptyTimeButton();
  }
  handleEmptyTimeButton() {
    // temp array for the timer buttons
    const temp = [];
    // Style of the different time button
    const style = {
      marginBottom: 10,
      width: '90%'
    };
    // for loop over 24 Button (each hour one button)
    for (let i = 0; i < 24; i += 1) {
      let label = this.createLabel(i);
      // push the button into an array
        temp.push(<Col xs={4} sm={3} key={i} style={{padding: 0}}>
        <RaisedButton
          id={`timeStart${i}`}
          className='times-buttons'
          name={i}
          label={label}
          labelColor="white"
          labelPosition="before"
          labelStyle={{padding: 0}}
          backgroundColor="#2EC68C"
          disabledBackgroundColor="#cdefe1"
          style={style}
          disabled={true}
          onClick={this.handleEndTime.bind(this)}
        />
      </Col>);
    }
    // set the button array
    this.state.getEndTime = temp;
  }
  // after rendering this component
  componentDidMount() {
    const { bookingView } = this.props;
    // save this component in the parent component
    bookingView.setThisStart(this);
  }
  // reload the ReturnDatePicker
  refreshTimer() {
    this.state.datePicker.componentWillMount();
  }
  // become the date from the ReturnDatePicker component
  getDate(dateL, date, context) {
    const { bookingView } = this.props;
    // save the component
    this.state.datePicker = context;
    // save the date in the parent component
    bookingView.setStartDate(date);
    // save the date label
    this.setState({ startDateLabel: dateL });
    this.handleTimes();
  }
  // if the return date becomes smaller then the pick up date - increase by one
  minusOneDay(){
    this.state.datePicker.changeDateMinus();
  }
  // create the url, loading icon, and reset the timer button
  handleTimes() {
    const { bookingView } = this.props;
    const { locationId } = this.props;
    if (document.getElementById(this.state.id)) {
      document.getElementById(this.state.id).style.backgroundColor = '#2EC68C';
    }
    // reset everything
    this.state.id = '';
    this.state.label = '';
    this.state.end = -1;
    bookingView.setStartTime(this.state.end);
    bookingView.setStartValue(this.state.label);

    // show the loading icon
    if (document.getElementById('loadingStart' + locationId)) {
      whiteBackground = { opacity: 0.3 };
      this.setState({ open: true });
    }
    // create the date label for the url (YYYY-MM-DD)
    const todayDate = this.state.datePicker.createDate(bookingView.state.startD);
    const returnDate = this.state.datePicker.createDate(bookingView.state.endD);
    // save the label in the parent component
    bookingView.setLabel(todayDate, returnDate);
    // create the url and get the data from the server
    GetDataForTimerPicker(todayDate,
      returnDate, locationId, bookingView.state.trailerId, this);
  }
  // create the timer picker
  handleTimerPicker(value) {
    // temp array for the timer buttons
    const temp = [];
    // if the button is disabled or not
    let dis = true;
    // Style of the different time button
    const style = {
      marginBottom: 10,
      width: '90%'
    };
    let check = true;
    this.state.alert = (<div><Col xs={12} style={{top: '-150px'}}>
      <h5 style={{backgroundColor: '#fcf8e3',
        padding: 10,
        textAlign: 'center',
        color: '#8a6d3b',
        borderStyle: 'solid',
        borderWidth: 1.0,
        borderColor: '#faebcc'
      }}>
        Der er ingen ledige resultater for de valgte datoer på denne lokation.
        Skift enten Afhentning eller Aflevering via pilene,
        for at ændre din søgning.
      </h5>
      </Col>
    </div>)
    const { locationId } = this.props;
    // for loop over 24 Button (each hour one button)
    for (let i = 0; i < 24; i += 1) {
      // looks which time is in the timer array
      const num = _.findIndex(value, ['hourInt', i]);
      let label = '';
      // if the time is not available disable the time
      if (num === -1) {
        label = this.createLabel(i);
        dis = true;
      } else {
        label = this.createLabel(i);
        dis = false;
      }
      if (dis == false && check == true) {
        check = false;
        this.state.alert = null;
      }
      // push the button into an array
        temp.push(<Col xs={4} sm={3} key={i} style={{padding: 0}}>
        <RaisedButton
          id={`timeStart${i}LID${locationId}`}
          className='times-buttons'
          name={i}
          label={label}
          labelColor="white"
          labelPosition="before"
          labelStyle={{padding: 0}}
          backgroundColor="#2EC68C"
          disabledBackgroundColor="#cdefe1"
          style={style}
          disabled={dis}
          onClick={this.handleEndTime.bind(this)}
        />
      </Col>);
    }
    // set the button array
    this.state.getEndTime = temp;
    this.forceUpdate();
  }
  // if you click a time from the timer picker
  handleEndTime(event) {
    // if one time-button was clicked
    const id = event.currentTarget.id;
    const { bookingView } = this.props;
    // set the number of the button
    this.state.end = event.currentTarget.name;
    // if no other time-botton was clicked before,...
    if (this.state.id === '') {
      // change button to active
      event.currentTarget.style.backgroundColor = '#206040';
      this.setState({ id: id });
      this.createTimeLabel(this.state.end);
    // if the button was clicked before
    } else if (this.state.id === id) {
      // reset the button to inactive / unpicked
      event.currentTarget.style.backgroundColor = '#2EC68C';
      this.state.id = '';
      this.state.label = '';
      this.state.end = -1;
    // if you will change the time
    } else {
      // set new button to active and the other to inactive
      event.currentTarget.style.backgroundColor = '#206040';
      document.getElementById(this.state.id).style.backgroundColor = '#2EC68C';
      this.setState({ id: id });
      this.createTimeLabel(this.state.end);
    }
    // saves the start time and start time label in parent component
    bookingView.setStartTime(this.state.end);
    bookingView.setStartValue(this.state.label);
  }
  // little function for creating the time label for the button
  createLabel(time) {
    // creates the label for the timer-button
    let label = '';
    if (time < 10) {
      label = `0${time}:00`;
    } else {
      label = `${time}:00`;
    }
    return label;
  }
  createTimeLabel(time) {
    // remember the choosen time
    const label = this.createLabel(time);
    this.state.label = label;
  }
  // after getting the data from the server load this function
  loadingFunc(test) {
    const { locationId } = this.props;
    // if data is there - disable the loading icon
    if (document.getElementById('loadingStart' + locationId)) {
      if (!_.isEmpty(test)) {
        if (test.pickup.length !== 0) {
          whiteBackground = {};
        }
        this.setState({ open: false });
      }
    }
    // become the pick up times from the data
    let end = test.pickup;
    // creates the timer-picker
    this.handleTimerPicker(end);
  }
  render() {
    const { locationId } = this.props;
    const { bookingPick } = this.props;
    return (
      <div>
        <ReturnDatePicker timerPicker={ this } dateTest={bookingPick} />
        <Col xs={12}>
          <Loading id={'loadingStart' + locationId} value={this.state.open} />
          <div style={ whiteBackground } >
            {this.state.getEndTime}
          </div>
          {this.state.alert}
        </Col>
      </div>
    );
  }
}
export default TimerPickerStart;
