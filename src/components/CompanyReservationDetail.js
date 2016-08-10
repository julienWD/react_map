import React from 'react';
import { Col } from 'react-bootstrap';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class CompanyReservationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkboxChecked : 'none'}
  }

  companyChecked(){
    if(this.state.checkboxChecked === 'none'){
      this.setState({ checkboxChecked: 'block' });
    }else{
      this.setState({ checkboxChecked: 'none' });
    }
  }
  render(){
    var styles = {
      borderColor:  '#387dc2',
      color:  '#387dc2'
    }
    var style = {
      color: 'grey',
      fontWeight: 'normal'
    };
    const checkBoxStyle = {
      fill: '#387dc2',
      color: 'grey',
      fontWeight: 'normal'
    }
    var show = {
      display: this.state.checkboxChecked
    }
    return(

    <div>
    <Col xs={12} sm={8}>
      <Checkbox
        label="Firma?"
        labelStyle = {style}
        iconStyle = {checkBoxStyle}
        style={{ paddingTop: 40 }}
        onCheck={this.companyChecked.bind(this)}
      />
    </Col>
      <div style={show}>
        <Col xs={12} sm={6}>
        <TextField
          floatingLabelText="Evt. Firma"
          floatingLabelFocusStyle = {styles}
          underlineFocusStyle = {styles}
        />
        </Col>
        <Col xs={12} sm={6}>
        <TextField
          floatingLabelText="CVR nr."
          floatingLabelFocusStyle = {styles}
          underlineFocusStyle = {styles}
        />
        </Col>
      </div>
    </div>
    );
  }
}

export default CompanyReservationDetail;
