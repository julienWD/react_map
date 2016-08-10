import { Grid, Row, Col} from 'react-bootstrap';
import React from 'react';
import MainUserInfo from '../components/MainUserInfo';
import CompanyReservationDetail from '../components/CompanyReservationDetail';
import BookingDetailsReservation from '../components/BookingDetailsReservation';
import Payment from '../components/Payment';

class ReservationDetails extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
      id : 0,
      trailer: -1,
      pickUp: '',
      return: '',
      userInfo: false,
      agreement: false,
      disable: true
   }
 }
 componentWillMount(){
    this.state.id = this.props.params.id;
    this.state.trailer = this.props.params.trailerId;
    this.state.pickUp = this.props.params.startDate;
    this.state.return = this.props.params.endDate;
  }
  getResponseUser(bool) {
    if (bool === true) {
      this.setState({ userInfo: true });
    } else {
      this.setState({ userInfo: false });
    }
  }
  getResponseAgreement(bool) {
    if (bool === true) {
      this.setState({ agreement: true });
    } else {
      this.setState({ agreement: false });
    }
  }
  nextPage() {
    if (this.state.userInfo === true && this.state.agreement === true) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }
  render() {
    const style = {
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#F0F0F0'
    };

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>RESERVATIONS DETALJER</h1>
          </Col>
          <Col xs={12} md={8}>
            <MainUserInfo value={this} />
            <CompanyReservationDetail />
            <Col xs={12}>
              <Payment value={this}/>
            </Col>
          </Col>
          <Col xs={12} md={4} style={style} zDepth={2}>
            <BookingDetailsReservation
              locationId={this.state.id}
              trailerId={this.state.trailer}
              pickUpD={this.state.pickUp}
              returnD={this.state.return}
              disable={this.state.disable}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ReservationDetails;
