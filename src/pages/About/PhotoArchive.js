import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import BackLink from '../../components/BackLink';

class PhotoArchive extends React.Component {

    render() {
        return (

           <Grid>

          	<Row>
                <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
                <Col xs={12} md={9}>
                    <PageHeading headingContent={this.props.headingContent} />
                </Col>
            </Row>
           </Grid>
        );
    }
}

PhotoArchive.defaultProps = {
  headingContent:'Fotoarkiv'
};

export default PhotoArchive;
