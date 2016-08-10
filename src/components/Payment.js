import React from 'react';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

class Payment extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      payment: 'Dankort'
   }
  }
  onChange(event,selected) {
    this.setState({ payment: selected });
  }
  handleAgreement(event, boolean) {
    const { value } = this.props;
    if (boolean === true) {
      value.getResponseAgreement(true);
      value.nextPage();
    } else {
      value.getResponseAgreement(false);
    }
  }
  render() {
    const style = {
      padding: 10,
      borderBottomColor: '#F0F0F0',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2
    };
    const icon = {
      fill: '#387dc2'
    };
    const checkboxStyle = {
      fontSize: '12px'
    };
    return(
      <div>
        <Paper zDepth={1} style={{ marginTop: 25 }}>
          <RadioButtonGroup name="payment" defaultSelected="Dankort" onChange={this.onChange.bind(this)}>
            <RadioButton
              value="Dankort"
              label="Dankort"
              style={style}
              iconStyle={icon}
            />
            <RadioButton
              value="Visa"
              label="VISA/Kreditkort"
              style={style}
              iconStyle={icon}
            />
            <RadioButton
              value="Afterpay"
              label="Faktura/Delbetaling"
              style={style}
              iconStyle={icon}
            />
            <RadioButton
              value="PayPal"
              label="PayPal"
              style={{ padding: 10 }}
              iconStyle={icon}
            />
          </RadioButtonGroup>
        </Paper>
        <h3 style={{ marginTop: 10 }}>{this.state.payment} </h3>
        <p> Beløbet bliver trukket, når din ordre er godkendt. Du modtager en mail med bekræftelse på din ordre. </p>
        <br />
        <p>*Obligatorisk felt</p>
        <Checkbox
          label="Ja, jeg accepterer Freetrailers aftalevilkår og persondatapolitik*"
          labelStyle={{ fontSize: '12px', color: '#387dc2' }}
          iconStyle={icon}
          onCheck={this.handleAgreement.bind(this)}
        />
        <Checkbox
          label="Jeg bekræfter, at de indtastede data er korrekte*"
          labelStyle={checkboxStyle}
          iconStyle={icon}
        />
        <Checkbox
          label="Ja, jeg vil gerne tilmeldes freetrailers nyhedsbrev"
          labelStyle={checkboxStyle}
          iconStyle={icon}
        />
      </div>
    );
  }
}
export default Payment;
