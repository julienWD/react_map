import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import BackLink from '../../components/BackLink';
import FTContactsImg from '../../images/media/freetrailer-contact.jpeg'


class Contact extends React.Component {

    render() {
        return (

           <Grid>
          	<Row>
                <Col xs={12} md={3}><BackLink link={this.props.link}/></Col>
                <Col xs={12} md={9}>
                    <PageHeading headingContent={this.props.headingContent} />
                    <img src={FTContactsImg} />
                    <p> Hovednummer: <strong> 88 537 700 </strong></p>
                    <p><strong>Kundeservice har  abent </strong></p>
                    <p><strong>Mandag - Fredag 8-17 <br />
                    Lordag 9-16 <br />
                    Sondag 9-15 </strong></p>
                    <p> Er du interesseret i at blive en del af Freetrailer, kan du læse mere om vores <Link to="/om-freetrailer/job"> jobmuligheder </Link>.</p>
                    <p> For pressehenvendelser kan vi henvise til vores pressemenu, hvor du finder <Link to="/om-freetrailer/presse">kontaktinformationer </Link>, pressemeddelelser og logo. </p>
                    <p> For øvrige henvendelser kan du se vores liste over medarbejdere og afdelinger <Link to="/om-freetrailer/medarbejdere"> her </Link>. </p>
                </Col>
            </Row>
           </Grid>
        );
    }
}

Contact.defaultProps = {
  link:'/om-freetrailer',
  headingContent:'Kontakt os'

};

export default Contact;
