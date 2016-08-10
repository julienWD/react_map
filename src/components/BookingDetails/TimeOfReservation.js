import React from 'react';

class TimeOfReservation extends React.Component {

  render(){
    const { pickUpD } = this.props;
    const { returnD } = this.props;

    const style = {
      textAlign : 'center',
      marginTop: '30px'
    };

    return(
      <div style={style}>
        <img src={'../../images/clock2.png'} style={{ marginBottom: 15 }}/>
        <h4>Reservations detaljer</h4>
        <p> { pickUpD } <br />
          { returnD }
        </p>
      </div>
    );
  }
}

export default TimeOfReservation;
