import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import BackLink from '../../components/BackLink';
import FTHistoryImg from '../../images/media/5577-gratis-trailer-id-eksporteres.jpg'

class FTHistory extends React.Component {

    render() {
        return (

           <Grid>

          	<Row>
                <Col xs={12} md={3}><BackLink link={this.props.link}/></Col>
                <Col xs={12} md={9}>
                	<article>
                    <PageHeading headingContent={this.props.headingContent}
                                 subHeadingContent={this.props.subHeadingContent} />
                 	<p><img src={FTHistoryImg} alt="freetrailer history image" /></p>
                    <p>Freetrailer er startet i Danmark i 2004 af Allan Sønderskov Darré og Aksel Blomgren Ambjørner. Baseret på den unikke forretningsidé, at varehuse, byggemarkeder og andre virksomheder kan tilbyde deres kunder den service at låne en Freetrailer gratis. En god kundeoplevelse, der skaber loyalitet, og styrker salget. Samtidig dekoreres Freetrailerne, så virksomheden eksponeres med logo og reklamebudskaber.</p>
                 	<p>For at understrege den gode kundeoplevelse er der intet krav om køb. Derfor navnet Freetrailer. Alle kan låne en Freetrailer– uanset til hvilket formål. Der er så mulighed for at tilkøbe services efter eget valg, for eksempel forsikring og ekstra dages lån.</p>
                 	<p>IKEA var den første virksomhed, der blev Freetrailer partner. Siden er konceptet blevet en så stor succes, at Freetrailer er førende på trailermarkedet i Danmark. Forretningen er udvidet med Sverige i 2006, Tyskland i 2013 og Norge i 2015.</p>
                 	<p>Nu har glade kunder lånt en gratis Freetrailer mere end 1,1 million gange!</p>
                 	</article>
                </Col>
            </Row>
           </Grid>
        );
    }
}

FTHistory.defaultProps = {
  link:'/om-freetrailer',
  headingContent:'Om Freetrailer',
  subHeadingContent:'Velkommen til Freetrailer. Vi stræber efter at tænke anderledes og udforme ideer, der gør transport fra A til B så nem som mulig. Vi ved at folk har fået mindre tid, og gerne vil bruge deres penge fornuftigt. Hos Freetrailer er convenience det vigtigste, som vi kan tilbyde kunden. En nem løsning, en gratis løsning.'

};

export default FTHistory;
