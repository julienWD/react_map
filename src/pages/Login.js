import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PageHeading from '../components/PageHeading';

class Login extends React.Component {
    render() {
        return (

            <Grid>
              <Row>
                <Col xs={12} md={8}>
                    <PageHeading headingContent={this.props.headingContent}
                               subHeadingContent={this.props.subHeadingContent} />
                </Col>
              </Row>
            </Grid>
        );
    }
}

Login.defaultProps = {
  headingContent:'Selvbetjening login',
  subHeadingContent:'Find, forlæng eller afmeld din reservation til din Freetrailer.'
};

export default Login;
