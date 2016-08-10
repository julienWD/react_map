import { Grid, Row} from 'react-bootstrap';
import React from 'react';

class Book extends React.Component {

    render() {

        return (
        	<Grid style={{margin: 0, width: '100%', padding: 0}}>
                <Row>{this.props.children}</Row>
        	</Grid>
        );
    }
}

export default Book;
