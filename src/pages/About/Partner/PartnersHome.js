import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../../components/PageHeading';
import BackLink from '../../../components/BackLink';
import PartnerNavItem from '../../../components/About/PartnerNavItem';
import partners from '../../../data/partnersInformation.json'

class PartnersHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partnersInfo: [] }
  }

  componentDidMount() {
    this.setState({partnersInfo : partners});
  }
    render() {


      var partners = this.state.partnersInfo.map(function(partner , i) {
          return <PartnerNavItem key={i}
                       title={partner.title}
                       logo = {partner.logo} />
      });

          return (
           <Grid>
               <Row>
                  <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
                  <Col xs={12} md={8}>
                      <PageHeading headingContent={this.props.headingContent}
                                   subHeadingContent={this.props.subHeadingContent} />
                      <Row>
                          <Col xs={12}>

                          {partners}

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
