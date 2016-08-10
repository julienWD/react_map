import React from 'react';
import { Col } from 'react-bootstrap';
import AdressReservationShop from './BookingDetails/AdressReservationShop';
import KindOfTrailer from './BookingDetails/KindOfTrailer';
import TimeOfReservation from './BookingDetails/TimeOfReservation';
import RaisedButton from 'material-ui/RaisedButton';

class BookingDetailsReservation extends React.Component {

  constructor(props) {
   super(props);
  }
  render(){

    const { locationId } = this.props;
    const { trailerId } = this.props;
    const { pickUpD } = this.props;
    const { returnD } = this.props;
    const { disable } = this.props;

    const buttonStyle = {
      width: '100%',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    };
    return(
      <div>
        <Col xs={6} md={6}>
          <KindOfTrailer id={locationId} trailerId={trailerId} />
        </Col>
        <Col xs={6} md={6}>
          <TimeOfReservation pickUpD={pickUpD} returnD={returnD} />
        </Col>
        <Col xs={12}>
          <AdressReservationShop id={ locationId } />
        </Col>
        <Col xs={12}>
        <br />
        <h4> Din ordre </h4>
         Some text ... <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla <br />
         bla bla bla bla bla bla
        </Col>
        <Col xs={12}>
          <RaisedButton
            label = "Betaling"
            labelColor = 'white'
            labelPosition = 'before'
            backgroundColor = '#2EC68C'
            disabled={disable}
            style={buttonStyle}
            linkButton= {true}
            href={'#/thank-you/' +
              locationId + '/' + trailerId + '/' +
              pickUpD + '/' +
              returnD
            }
          />
        </Col>
      </div>
    );
  }



}

export default BookingDetailsReservation;
