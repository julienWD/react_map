import React from 'react';
import { Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';

class MainUserInfo extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      name : '',
      tele: '',
      post: '',
      mail: '',
      street: '',
      by: ''
   }
  }
  setInputName(event) {
    this.setState({ name: event.currentTarget.value }, function() {
      this.checkInput();
    });
  }
  setInputTele(event) {
    this.setState({ tele: event.currentTarget.value }, function() {
      this.checkInput();
    });
  }
  setInputPost(event) {
    this.setState({ post: event.currentTarget.value }, function() {
      this.checkInput();
    });
  }
  setInputMail(event) {
    this.setState({ mail: event.currentTarget.value }, function() {
      this.checkInput();
    });
  }
  setInputStreet(event) {
    this.setState({ street: event.currentTarget.value }, function() {
      this.checkInput();
    });
  }
  setInputBy(event) {
    this.setState({ by: event.currentTarget.value }, function() {
      this.checkInput();
    });
  }
  checkInput() {
    const { value } = this.props;
    if (this.state.name !== '' && this.state.tele !== '' &&
    this.state.post !== '' && this.state.mail !== '' &&
    this.state.street !== '' && this.state.by !== '') {
      value.getResponseUser(true);
      value.nextPage();
    } else {
      value.getResponseUser(false);
    }
  }
  render(){
    var styles = {
      borderColor:  '#387dc2',
      color:  '#387dc2'
    }
    return(
      <div>
        <Col xs={12} sm={6}>
          <TextField
            floatingLabelText="Navn*"
            floatingLabelFocusStyle = {styles}
            underlineFocusStyle = {styles}
            onChange={this.setInputName.bind(this)}
          /><br />
          <TextField
            floatingLabelText="Telefon nr.*"
            floatingLabelFocusStyle = {styles}
            underlineFocusStyle = {styles}
            onChange={this.setInputTele.bind(this)}
          /><br />
          <TextField
            floatingLabelText="Post nr.*"
            floatingLabelFocusStyle = {styles}
            underlineFocusStyle = {styles}
            onChange={this.setInputPost.bind(this)}
          />
        </Col>
        <Col xs={12} sm={6}>
          <TextField
            floatingLabelText="Email Adress*"
            floatingLabelFocusStyle = {styles}
            underlineFocusStyle = {styles}
            onChange={this.setInputMail.bind(this)}
            type="email"
          /><br />
          <TextField
            floatingLabelText="Gadenavn og nr*"
            floatingLabelFocusStyle = {styles}
            underlineFocusStyle = {styles}
            onChange={this.setInputStreet.bind(this)}
          /><br />
          <TextField
            floatingLabelText="By*"
            floatingLabelFocusStyle = {styles}
            underlineFocusStyle = {styles}
            onChange={this.setInputBy.bind(this)}
          />
        </Col>
      </div>

    );
  }
}

export default MainUserInfo;
