import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import BackLink from '../../../components/BackLink';
import StringReplace from  '../../../components/StringReplace';
import partners from '../../../data/partnersInformation.json'


class PartnersHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partnersInfo: [] }
  }

  componentDidMount() {
    this.setState({partnersInfo:partners});

  }
    render() {

      var currentPartner = {};
      for(var i = 0; i < this.state.partnersInfo.length; i++){
        var linkedTitle = StringReplace(this.state.partnersInfo[i].title);
        if(linkedTitle === this.props.params.title){
            currentPartner = this.state.partnersInfo[i];

        }
      }



          return (
           <Grid>
               <Row>
                  <Col xs={12} md={3}><BackLink link="/om-freetrailer/samarbejdspartnere"/></Col>
                  <Col xs={12} md={8}>
                      <Row>
                          <Col xs={12}>
                            <h1><strong> {currentPartner.title} </strong></h1>
                          </Col>
                          <Col xs={12}>
                            <img src={'../../../images/about/partner/' + currentPartner.image}/>
                          </Col>
                          <Col xs={12}>
                            {currentPartner.description}
                          </Col>
                      </Row>
                  </Col>
              </Row>
           </Grid>
        );
    }
}

PartnersHome.defaultProps = {
  headingContent:'Samarbejdspartnere',
  subHeadingContent:'Partnere hos Freetrailer har set lyset i at yde ekstra service for deres kunder. Freetrailer konceptet skaber loyale kunder for deres partnere. Med landsdækkende service, nem tilgængelighed, og et unikt koncept har vi gjort det nemt for vore partnere at tilfredsstille deres kunder. Vi skaber trafik til din butik.'

};

export default PartnersHome;
