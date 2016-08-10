import { Grid, Row, Col} from 'react-bootstrap';
import React from 'react';
import AdressReservationShop from '../components/BookingDetails/AdressReservationShop';
import KindOfTrailer from '../components/BookingDetails/KindOfTrailer';
import TimeOfReservation from '../components/BookingDetails/TimeOfReservation';
import RaisedButton from 'material-ui/RaisedButton';

class ThankYou extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     id : 0,
     trailer: -1,
     pickUp: '',
     return: ''
   }
 }
 componentWillMount(){
   this.setState({ id: this.props.params.locationId });
   this.setState({ trailer: this.props.params.trailerId });
   this.setState({ pickUp: this.props.params.pickUpD });
   this.setState({ return: this.props.params.returnD });
  }
  render() {
    return (
      <Grid>
        <Row>
          <div>
            <Col xs={12} md={6}>
              <h1>DIN FREETRAILER ER RESERVERET!</h1>
              <Col xs={1}>
                <img src={'../images/check.png'} />
              </Col>
              <Col xs={11}>
                Din reservation er nu klar til at blive hentet ved :
                {'  ' + this.state.pickUp}
              </Col>
              <Col xs={1}>
                <img src={'../images/like.png'} />
              </Col>
              <Col xs={11}>
                Bare rolig. Vi har sent informationerne til din mailbox. Vi sender dig også en kort SMS.
              </Col>
            </Col>
            <Col xs={12} md={6}>
              <Col xs={12} md={4}>
                <KindOfTrailer id={this.state.id} trailerId={this.state.trailer} />
              </Col>
              <Col xs={12} md={4}>
                <TimeOfReservation pickUpD={this.state.pickUp} returnD={this.state.return} />
              </Col>
              <Col xs={12} md={4}>
                <img src={'../images/location.png'} style={{ textAlign: 'center', marginTop: 30, marginBottom: -15 }}/>
                <AdressReservationShop id={ this.state.id } />
              </Col>
            </Col>
          </div>
          <div>
            <Col xs={12} md={6}>
              <h1>NY BIL FORSIKRING?</h1>
              <p> Når du lejer en freetrailer kan du gøre brug af vores mange gode tilbud. Lige nu kan du gøre brug af et unikt tilbud hos ABC Bil Forsikring, hvis du leder efter en god pris! </p>
              <RaisedButton
                label = "Se din Pris"
                labelColor = 'white'
                labelPosition = 'before'
                backgroundColor = '#2EC68C'
                style={{ margin: 20 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <h1>PAS PÅ DERUDE!</h1>
              <p>Med en freetrailer på slæb, må du maks. køre 80 km/t. Vi ønsker dig god tur og sikker kørsel ude i trafikken. Har du spørgsmål, så har vi svar!</p>
              <RaisedButton
                label = "Laes Mere"
                labelColor = 'white'
                labelPosition = 'before'
                backgroundColor = '#2EC68C'
                style={{ margin: 20 }}
                linkButton= {true}
                href={'#/spoergsmaal-svar'
                }
              />
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}

export default ThankYou;
