import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import PageHeading from '../../components/PageHeading';
import BackLink from '../../components/BackLink';

class NewsletterSignUp extends React.Component {

    render() {
        return (

           <Grid>

          	<Row>
                <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
                <Col xs={12} md={9}>
                    <PageHeading headingContent={this.props.headingContent}
                                subHeadingContent={this.props.subHeadingContent} />
                    <p>Nyhedsbrev<br />
                    Modtag vores nyhedsbrev med gode tilbud. </p>
                    <Col xs={12} sm={3}><h4><strong>Sikkerhedskode</strong></h4></Col>
                    <Col xs={12} sm={9}>
                      <p> random code generator </p>
                    </Col>
                </Col>

            </Row>
           </Grid>
        );
    }
}

NewsletterSignUp.defaultProps = {
  headingContent:'Hold dig opdateret på Freetrailer',
  subHeadingContent:'Tilmeld dig vores nyhedsbrev og App og få nyheder om nye afhentningssteder, ledige jobs hos Freetrailer, nye tiltag, gode råd, og gode tilbud. Lad os udforske de gratis glæder!'
};

export default NewsletterSignUp;
