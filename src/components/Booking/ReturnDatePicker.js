import React from 'react';
import { Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import ArrowRight from 'react-material-icons/icons/navigation/chevron-right';
import ArrowLeft from 'react-material-icons/icons/navigation/chevron-left';
// Component for the Date Picker - directly over the timer picker
class ReturnDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateLabel: '', // Label for the choosen return Date (YYYY-MM-DD)
      dateLabelWD: '', // Label with Weekday, Month Name (WeekDay Day Month)
      date: null, // choosen return Date, starts by the current Date
      disabled: true, // show date back Button or not,at the beginning dont show
      currentDate: new Date(),  // holds the current Date
      currentDateLabel: '' // holds the current Date in form as a string
    };
  }
  componentWillMount() {
    // fired before the first render() starts
    const { dateTest } = this.props;
    var copyDate = new Date(dateTest);
    this.state.date = copyDate;
    this.handleDateChange();
  }
  componentDidMount() {
    this.handleBackButton();
  }
  // looks if the backbutton is available (one day back)
  handleBackButton() {
    // if the date-back-button still exists (at the first time he dosent exist)...
    if (document.getElementById('BackButton')) {
      // if current date and picked date are the same -> disable the button,...
      if (this.state.dateLabel == this.state.currentDateLabel) {
        this.setState({ disabled: true });
        this.state.disabled = true;
        // ...else show the button
      } else {
        this.setState({ disabled: false });
        this.state.disabled = false;
      }
    }
  }
  // creates a label from a date (YYYY-MM-DD)
  createDate(setDate) {
    // will return a string for the choosen date
    const date = setDate;
    let string = '';
    // returns only the year
    const year = date.getFullYear();
    // + 1 , because the months starts by 0
    let month = date.getMonth() + 1;
    // returns the day
    let day = date.getDate();
    // add a 0 if month or day are smaller then 10
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
  // if you changed the date
  handleDateChange() {
    const { timerPicker } = this.props;
    // creates label for the current date and new date (YYYY-MM-DD)
    this.state.currentDateLabel = this.createDate(this.state.currentDate);
    this.state.dateLabel = this.createDate(this.state.date);
    // create a different label -> Weekday day Month
    this.setState({ dateLabelWD: `${this.state.date.toString().split(' ')[0]} \
    ${this.state.date.toString().split(' ')[2]} \
    ${this.state.date.toString().split(' ')[1]}` });
    // look if backbutton should be shown
    this.handleBackButton();
    // set dates in the timer picker
    timerPicker.getDate(this.state.dateLabel, this.state.date, this);
  }
  // if you add a day to the date
  changeDateAdd() {
    // become the day of the date
    const day = this.state.date.getDate();
    // become the date
    const tempDate = this.state.date;
    // add one day to the date
    tempDate.setDate(day + 1);
    // save the date
    this.setState({ date: tempDate });
    this.handleDateChange();
  }
  // if you decrease the date by one
  changeDateMinus() {
    const day = this.state.date.getDate();
    const tempDate = this.state.date;
    tempDate.setDate(day - 1);
    this.setState({ date: tempDate });
    this.handleDateChange();
  }
  render() {
    // style for the left button (one date back)
    const stylesButtonLeft = {
      width: '90%',
      marginBottom: 10,
      height: '42px',
      width: '42px'
    };
    // styles for the right button (one day more)
    const stylesButtonRight = {
      width: '90%',
      marginBottom: 10,
      height: '42px',
      width: '42px',
      paddingLeft: 0
    };
    // styles for the shown date
    const datePick = {
      textAlign: 'center',
      width: '95%',
      fontSize: '16px',
      paddingTop: 30
    };
    return (
      <div>
        <Col xs={3} style={{ padding: 0 }}>
          <IconButton
            id="BackButton"
            className='times-buttons'
            onClick={this.changeDateMinus.bind(this)}
            disabled={this.state.disabled}
            style={stylesButtonLeft}
            iconStyle={{width: '42px', height: '42px'}}
          >
          <ArrowLeft />
          </IconButton>
        </Col>
        <Col xs={6} style={{ padding: 0 }}>
          <h5 style={datePick}>{this.state.dateLabelWD}</h5>
        </Col>
        <Col xs={3} style={{ padding: 0 }}>
          <IconButton
            className='times-buttons'
            onClick={this.changeDateAdd.bind(this)}
            style={stylesButtonRight}
            iconStyle={{width: '42px', height: '42px'}}
          >
          <ArrowRight />
          </IconButton>
        </Col>
      </div>
    );
  }
}
export default ReturnDatePicker;
