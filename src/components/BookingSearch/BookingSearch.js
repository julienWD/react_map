import React from 'react';
import { Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Arrow from 'react-material-icons/icons/navigation/chevron-right';
import Event from 'react-material-icons/icons/action/event';
import Place from 'react-material-icons/icons/maps/place';
import Search from 'react-material-icons/icons/action/search';

class BookingSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 999,         // Partner value (999 = all) -> type: number
      date: new Date(),   // current date -> type: date
      pick: new Date(),   // pickup date -> type: date
      return: new Date()  // return date -> type: date
    };
  }
  // if you change the Partner
  handleChange(event, index, value) {
    const { booking } = this.props;
    booking.setFilterValue(value);  // set the new value in the bookingHome component
    this.setState({value}); // set the new Partner
  }
  // function for the pickup date
  handlePickUp(t, date) {
    const { booking } = this.props;
    this.setState({ pick: date });  // set new date
    booking.setPickUpDate(date); // set the new date in the bookingHome component
    // if this date is bigger than return date ... change also return date
    if( this.state.return <= date) {
      this.setState({ return: date });
      booking.setReturnDate(date);
    }
  }
  // function for the return date
  handleReturn(t, date) {
    const { booking } = this.props;
    booking.setReturnDate(date);  // set the new date in the bookingHome component
    this.setState({ return: date });
  }
  // render contains a:
  // 1. Textfield with a search icons
  // 2. two date pickers + event icon and arrow icons
  // 3. Selectfield + location icon
  render() {
    return (
      <Col xs={12} style={{marginBottom: '10px'}}>
        <Col xs={12} md={4} style={{ textAlign: 'center'}}>
          <h5 style={{ padding: 10, paddingBottom: 0 }} id="searchHeader"> OMRÅDE </h5>
          <Col xs={3} style={{padding: 0, paddingTop: 10}}>
            <div
              style={{height: '40px',
                backgroundColor: 'white',
                border: '1px solid #D3D3D3',
                borderRight: 'none',
                width: '100%'
              }}>
              <Search
                style={{fill: '#cbd6da',
                  width: '32px',
                  height: '32px',
                  paddingTop: '7px'}}
              />
            </div>
          </Col>
          <Col xs={9} style={{ padding: 0, paddingTop: 10 }}>
            <TextField
              id="enterLocation"
              hintText="Enter a Location"
              hintStyle={{top: '8px'}}
              placeholder=""
              style={{backgroundColor: 'white',
                height: '40px',
                border: '1px solid #D3D3D3',
                borderLeft: 'none',
                width: '100%'}}
              floatingLabelStyle={{top: '8px',
                width: '100%'}}
              underlineStyle={{width: '0px'}}
            />
          </Col>
        </Col>

        <Col xs={12} sm={8} md={4}>
          <Col xs={6} style={{padding: 0}}>
            <h5 style={{ textAlign: 'center', padding: 10, paddingBottom: 0 }} id="searchHeader">
              AFHENTNING
            </h5>
            <Col xs={3} style={{ padding: 0, paddingTop: 10 }}>
            <div
              style={{height: '40px',
                backgroundColor: 'white',
                border: '1px solid #D3D3D3',
                borderRight: 'none',
                width: '100%'
              }}>
              <Event
                id="materialIcon"
                style={{
                  fill: '#cbd6da',
                  height: '32px',
                  width: '32px',
                  paddingTop: '7px'}}/>
              </div>
            </Col>
            <Col xs={9} style={{ padding: 0, paddingTop: 10 }}>
              <DatePicker
                id="pickUpDate"
                mode="landscape"
                value={this.state.pick}
                style={{backgroundColor: 'white',
                  width: 'auto',
                  height: '40px',
                  border: '1px solid #D3D3D3',
                  borderRight: 'none',
                  borderLeft: 'none'}}
                textFieldStyle={{
                  width: '90%',
                  marginLeft: '5px',
                  top: '-5px',
                  fontSize: '14px'
                  }}
                underlineStyle={{width: '0px'}}
                minDate={this.state.date}
                onChange={this.handlePickUp.bind(this)}
              />
            </Col>
          </Col>
          <Col xs={6} style={{ padding: 0 }}>
            <h5 style={{ textAlign: 'center', padding: 10, paddingBottom: 0}} id="searchHeader">
              AFLEVERING
            </h5>
            <Col xs={3} style={{ padding: 0, paddingTop: 10 }}>
              <div
                style={{height: '40px',
                  backgroundColor: 'white',
                  border: '1px solid #D3D3D3',
                  borderRight: 'none',
                  borderLeft: 'none',
                  width: '100%'
                }}>
              <Arrow
                id="materialIcon"
                style={{
                  fill: '#cbd6da',
                  height: '32px',
                  width: '32px',
                  paddingTop: '7px'}}/>
              </div>
            </Col>
            <Col xs={9} style={{ padding: 0, paddingTop: 10 }}>
              <DatePicker
                id="returnDate"
                hintText="Return Date"
                mode="landscape"
                value={this.state.return}
                style={{backgroundColor: 'white',
                  width: 'auto',
                  height: '40px',
                  border: '1px solid #D3D3D3',
                  borderLeft: 'none'}}
                textFieldStyle={{ width: '90%',
                  fontSize: '16px',
                  marginLeft: '5px',
                  top: '-5px',
                  fontSize: '14px'}}
                underlineStyle={{width: '0px'}}
                minDate={this.state.pick}
                onChange={this.handleReturn.bind(this)}
              />
            </Col>
          </Col>
        </Col>

        <Col xs={12} sm={4}>
          <h5 style={{ textAlign: 'center', padding: 10, paddingBottom: 0 }} id="searchHeader">
            PARTNER
          </h5>
          <Col xs={3} style={{ padding: 0, paddingTop: 10 }}>
            <div
              style={{height: '40px',
                backgroundColor: 'white',
                border: '1px solid #D3D3D3',
                borderRight: 'none',
                width: '100%'
              }}>
              <Place
                style={{ fill: '#cbd6da',
                  height: '32px',
                  width: '32px',
                  paddingTop: '10px'}}
              />
            </div>
          </Col>
          <Col xs={9} style={{ padding: 0, paddingTop: 10 }}>
            <SelectField
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              style={{
                backgroundColor: 'white',
                height: '40px',
                width: '100%',
                border: '1px solid #D3D3D3',
                borderLeft: 'none'}}
                labelStyle={{top: '-7px'}}
              underlineStyle={{width: '0px'}}
              iconStyle={{ display: 'none' }}
            >
              <MenuItem value={999} primaryText="All Partner" style={{ backgroundColor: 'white' }}/>
              <MenuItem value={1} primaryText="IKEA" style={{ backgroundColor: 'white' }} />
              <MenuItem value={24} primaryText="Silvan" style={{ backgroundColor: 'white' }} />
              <MenuItem value={15} primaryText="Bilka" style={{ backgroundColor: 'white' }} />
              <MenuItem value={30} primaryText="Pelikan" style={{ backgroundColor: 'white' }} />
            </SelectField>
          </Col>
        </Col>
      </Col>
    );
  }
}
export default BookingSearch;
