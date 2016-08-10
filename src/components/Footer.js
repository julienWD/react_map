import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
        	 <footer>
                <div className="footer-links text-center">
                    <Grid>
                        <Row>
                            <Col>
                                <a className="partner" target="_blank" href="http://dk.administration.freetrailer.dk/Login.aspx?ReturnUrl=/default.aspx">Partner login</a>
                                <a className="facebook" target="_blank" href="https://www.facebook.com/Freetrailer">Følg os på Facebook</a>
                                <a className="instagram" target="_blank" href="https://instagram.com/freetrailerdanmark/">Følg os på Instagram</a>
                                <a className="linkedin" target="_blank" href="https://www.linkedin.com/company/freetrailer">Følg os på Linkedin</a>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        	 	<div className="footer-contact text-center">
        	 		<Grid>
        	 			<Row>
        	 				<Col>
        	 					<span>Freetrailer Danmark ApS | </span>
        	 					<span>Frederikssundsvej 62 B. Baghuset 2400 KBH NV | </span>
        	 					<span>E-mail: info@freetrailer.dk</span>
        	 				</Col>
        	 			</Row>
        	 		</Grid>
        	 	</div>
        	 </footer>
        );
    }
}

Footer.defaultProps = {};

export default Footer;
