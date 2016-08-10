import React from 'react';
import { Row, Col} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class BookTrailer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          input: 'Kopenhagen'
        };
    }
    componentDidMount() {
      let input = document.getElementById('inputLocation');
      let autocomplete = new google.maps.places.Autocomplete(input);
      let func = this;
      autocomplete.addListener('place_changed', function(){
        let temp = document.getElementById('inputLocation').value;
        func.setState({ input: temp });
        document.getElementById('locationBtn').click();
      });
    }
    handleInput(event) {
      this.setState({ input: document.getElementById('inputLocation').value});
    }
    render() {

        var stylesHint = {
          color: '#fff'
        }
        if(document.getElementById('inputLocation')){
        document.getElementById('inputLocation')
        .addEventListener('keyup', function(event) {
          event.preventDefault();
          if (event.keyCode == 13) {
            document.getElementById('locationBtn').click();
          }
        });
        }
        return (
            <Row className="text-center">
                <Col xs={12} sm={12} md={8} lg={8}>
    				      <TextField
                    type="text"
                    id="inputLocation"
                    placeholder=""
                    hintText="Hvor vil du hente din trailer?"
                    hintStyle={stylesHint}
                    inputStyle={stylesHint}
                    onChange={this.handleInput.bind(this)}
                  />
    			      </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                <RaisedButton
                  id="locationBtn"
                  label = "Find din Trailer"
                  labelColor = 'white'
                  labelPosition = 'before'
                  backgroundColor = '#2EC68C'
                  style={{marginTop: '10px'}}
                  linkButton= {true}
                  href={'#/book-en-trailer/' + this.state.input }
                />
                </Col>
            </Row>
        );
    }
}

export default BookTrailer;
