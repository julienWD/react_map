import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PageHeading from '../components/PageHeading'
import TeamMember from '../components/Team/TeamMember'

class Partner extends React.Component {

    render() {
        return (

        <Grid>
        	<Row>
        		<Col xs={12} md={3}>Search bar</Col>
            	<Col xs={12} md={9}>
            		<PageHeading headingContent={this.props.headingContent}
            					 subHeadingContent= {this.props.subHeadingContent} />


                <TeamMember name={this.props.member.name}
                            position = {this.props.member.position}
                            image = {this.props.member.image}
                            phone = {this.props.member.phone}
                            email = {this.props.member.email} />
                </Col>
            </Row>

            </Grid>
        );
    }
}

Partner.defaultProps = {
    headingContent: 'Bliv partner',
    subHeadingContent: 'Masser af eksponering i gadebilledet og masser af trafik til butikkerne. Det er hvad du kan se frem til som kommende partner hos Freetrailer!',
    member:{name:'Jesper Husen',position:'Sales Director', phone:'+45 27400200', email:'jh@freetrailer.dk'}
};

export default Partner;
