import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import BackLink from '../../components/BackLink';
import FTPressImg from '../../images/media/freetrailer-presse.jpeg'

class Press extends React.Component {

    render() {
        return (

           <Grid>

          	<Row>
                <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
                <Col xs={12} md={9}>
                    <PageHeading headingContent={this.props.headingContent} />
                    <img src={FTPressImg} />
                    <h4><strong>Freetrailer Info </strong></h4>
                    <p>Freetrailer ApS</p>
                    <p>Adresse: <br />
                    Frederikssundsvej 62 B – Baghuset<br />
                    2400 KBH NV<br />
                    Danmark<br />
                    CVR-number 27-62-66-61<br /></p>
                    <p><em>Kontakt:</em> <br />
                    Tlf.: 88 537 700</p>
                    <p><em>Profil:</em><br />
                    Freetrailer ApS er førende på markedet for gratis leje af trailere. Vores forretning er baseret på at kunne tilbyde brugere af trailere
                    gratis lån af en trailer for en dag, samt tilbyde trailerudlejere eksponering af deres virksomhed, flere kundebesøg samt mulighed for
                    øget salg. Freetrailer beskæftiger 25 mennesker og har hovedsæde i Danmark. Virksomheden er for 6. år i træk udnævnt til Gazelle virksomhed.</p>
                    <p><em>Direktion:</em><br />
                    Allan Sønderskov Darre <br />
                    Aksel Blomgren Ambjørner <br />
                    Antal fuldtidsansatte                                 34 <br />
                    Antal lejetrailere i DK                                800 <br />
                    Antal afhentningssteder i DK                   81 <br /></p>
                    <h4><strong>Pressekontakt </strong></h4>
                    <p>Presseafdelingen <br />
                    Claus Bendsen<br />
                    Help PR & Kommunikation<br />
                    Tlf.: 20 26 32 96<br /></p>
                    <p> For specifikke spørgsmål relateret til de individuelle forretningsområder, kan du kontakte de enkelte afdelinger. Du finder den komplette medarbejderliste <Link to="/om-freetrailer/medarbejdere">her</Link>. </p>
                    <h4><strong>Freetrailer materiale </strong></h4>
                    <p><em>Nyheder:</em><br />
                    Læs nyheder vedrørende Freetrailer <Link to="/nyheder" >her</Link>.</p>
                    <p><em>Pressemeddelelser:</em><br />
                    Pressemeddelelser udstedt af Freetrailer, læs mere <Link to="/nyheder" >her</Link>.</p>
                    <p><em>Pressemateriale:</em><br />
                    Download <Link to="/nyheder" >logo</Link>.</p>
                </Col>
            </Row>
           </Grid>
        );
    }
}

Press.defaultProps = {
    headingContent: 'Presse'
};

export default Press;
