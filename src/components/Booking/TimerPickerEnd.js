import React from 'react';
import { Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';
import GetDataForTimerPicker from './GetDataForTimerPicker';
import ReturnDatePicker from './ReturnDatePicker';
import Loading from './Loading';

let whiteBackground = { opacity: 0.3 };
// Component for the Return Timer Picker
class TimerPickerEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getEndTime: [], // saves the endTime - - Buttons
      end: -1, // looks if a time were choosen, and which
      id: '', // saves the id
      label: '', // Label for the final return Time
      refresh: true, // if you should show the loading or not
      datePicker: null, // saves the ReturnDatePicker Component
      startLabel: null, // saves the picked start time
      endLabel: null, // saves the picked returntime
      alert: null // holds the alert message - if there are not times
    };
  }
  // after rendering do...
  componentDidMount() {
    // set this component to the parent component
    const { bookingView } = this.props;
    bookingView.setThisEnd(this);
  }
  componentWillMount() {
    // at the beginning create empty button
    this.handleEmptyTimeButton();
  }
  // creates empty time button
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
  // get the date from the ReturnDatePicker
  getDate(dateL, date, context) {
    const { bookingView } = this.props;
    // save the ReturnDatePicker Component
    this.state.datePicker = context;
    // save the return date
    bookingView.setEndDate(date);
    this.handleTimes();
  }
  // add one day to the return date
  addOneDay() {
    this.state.datePicker.changeDateAdd();
  }
  // reload the ReturnDatePicker component
  refreshTimer() {
    this.state.datePicker.componentWillMount();
  }
  // reset the return time button
  resetTime() {
    const { bookingView } = this.props;
    this.state.id = '';
    this.state.label = '';
    this.state.end = -1;
    bookingView.setEndTime(this.state.end);
  }
  // main function
  handleTimes() {
    const { bookingView } = this.props;
    const { locationId } = this.props;
    if (document.getElementById(this.state.id)) {
      document.getElementById(this.state.id).style.backgroundColor = '#2EC68C';
    }
    // reset all
    this.resetTime();
    bookingView.setEndValue(this.state.label);
    // before start the server request show loading
    if (document.getElementById('loadingReturn' + locationId)) {
      whiteBackground = { opacity: 0.3};
      this.setState({ refresh: true });
    }
    // create the variables which you need for the url
    const todayDate = this.state.datePicker.createDate(bookingView.state.startD);
    const returnDate = this.state.datePicker.createDate(bookingView.state.endD);
    this.setState({ startLabel: todayDate });
    this.setState({ endLabel: returnDate });
    bookingView.setLabel(todayDate, returnDate);
    // create the url and get the json
    GetDataForTimerPicker(todayDate,
      returnDate, locationId, bookingView.state.trailerId, this);
  }
  // build the timer picker
  handleTimerPicker(value, startTime) {
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
    const { locationId } = this.props;
    // need for look up if start time is bigger
    var afterStartTime = false;
    var indexAfterStart = false;
    // for loop over 24 Button (each hour one button)
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
    for (let i = 0; i < 24; i += 1) {
      // looks which time is in the timer array
      const num = _.findIndex(value, ['hourInt', i]);
      let label = '';
      // if start date = return date
      if (this.state.startLabel === this.state.endLabel) {
        // if a start time was picked
        if(startTime != -1){
          if(num == -1 || i <= startTime || indexAfterStart === true){
            if(i == startTime){
              afterStartTime = true;
            }else if(num === -1 && afterStartTime === true){
              indexAfterStart = true;
            }
            label = this.createLabel(i);
            dis = true;
          }else{
            label = this.createLabel(i);
            dis = false;
          }
        }else{
          if(num == -1){
            label = this.createLabel(i);
            dis = true;
          }else{
            label = this.createLabel(i);
            dis = false;
          }
        }
      } else {
        if (num === -1) {
          label = this.createLabel(i);
          dis = true;
        } else {
          label = this.createLabel(i);
          dis = false;
        }
      }
      // if you find one time -> set alert to null -> no warning
      if (dis == false && check == true) {
        check = false;
        this.state.alert = null;
      }
      // push the button into an array
      temp.push(<Col xs={4} sm={3} key={i} style={{padding: 0}}>
        <RaisedButton
          id={`timeEnd${i}LID${locationId}`}
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
    this.setState({ getEndTime: temp });
  }
  // handle if one time button was clicked
  handleEndTime(event) {
    const { bookingView } = this.props;
    const id = event.currentTarget.id;
    this.state.end = event.currentTarget.name;
    // if no other time-botton was clicked before,...
    if (this.state.id === '') {
      // change button to active
      event.currentTarget.style.backgroundColor = '#206040';
      this.setState({ id: id });
      this.createTimeLabel(this.state.end);
    // if you click the picked time again
    } else if (this.state.id === id) {
      // change button to normal / unpicked
      event.currentTarget.style.backgroundColor = '#2EC68C';
      this.state.id = '';
      this.state.label = '';
      this.state.end = -1;
    // if you change the time
    } else {
      // change color of the new button
      event.currentTarget.style.backgroundColor = '#206040';
      // reset button, which was picked before
      document.getElementById(this.state.id).style.backgroundColor = '#2EC68C';
      // save the clicked button
      this.setState({ id: id });
      this.createTimeLabel(this.state.end);
    }
    bookingView.setEndTime(this.state.end);
    // save the final time label in parent
    bookingView.setEndValue(this.state.label);
  }
  // create the time label
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
  // save the time label
  createTimeLabel(time) {
    // remember the choosen time
    const label = this.createLabel(time);
    this.state.label = label;
  }
  // called after you got the data from the server
  loadingFunc(test) {
    const { bookingView } = this.props;
    const { locationId } = this.props;
    // if the data is not empty - loading icon should disappear
    if (document.getElementById('loadingReturn' + locationId)) {
      if (!_.isEmpty(test)) {
        if (test.delivery.length !== 0) {
          whiteBackground = {};
        }
        this.setState({ refresh: false });
      }
    }
    // save the available return times ( you got them from the server)
    let end = test.delivery;
    // save the times also in the parent
    bookingView.setPickUp(end);
    // creates the timer-picker
    this.handleTimerPicker(end, bookingView.state.startTime);
  }
  render() {
    const { locationId } = this.props;
    const { bookingReturn } = this.props;
    return (
      <div>
        <ReturnDatePicker timerPicker={ this } dateTest={bookingReturn}/>
        <Col xs={12}>
          <Loading id={'loadingReturn' + locationId}
            value={this.state.refresh}
          />
          <div style={ whiteBackground } >
          {this.state.getEndTime}
          </div>
          {this.state.alert}
        </Col>
      </div>
    );
  }
}
export default TimerPickerEnd;
