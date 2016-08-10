import { Grid, Row} from 'react-bootstrap';
import React from 'react';

class Partners extends React.Component {

    render() {
        return (
        	<Grid>
                <Row>{this.props.children}</Row>
        	</Grid>
        );
    }
}

export default Partners;
