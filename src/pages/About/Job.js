import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import Testimonial from '../../components/Testimonials/Testimonial';
import BackLink from '../../components/BackLink';
import FTJobImg from '../../images/media/freetrailer-job.jpeg'

class Job extends React.Component {

  render() {

    return (
      <Grid>
      <Row>
      <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
      <Col xs={12} md={8}>
      <PageHeading headingContent={this.props.headingContent}
                  subHeadingContent={this.props.subHeadingContent} />
	    <p><img src={FTJobImg} alt="freetrailer job image" /></p>
      <p><strong>Vil du arbejde hos os?</strong></p>
      <p><em>Der er i øjeblikket ingen ledige stillinger hos Freetailer.</em></p>
      <p>Du kan tilmelde dig vores vores nyhedsbrev, hvor vi informerer om eventuelle ledige stillinger.</p>
      <p>Du kan også sende os en uopfordret ansøgning til <a href="mailto:info@freetrailer.dk">info@freetrailer.dk</a></p>
      <p><strong>Freetrailer som arbejdsplads</strong></p>
      <p>Vi er en virksomhed i vækst. Ønsker du et blive en del af det?<br />Freetrailer er en arbejdsplads i iværksætteriets navn med 34 ansatte i 4 forskellige lande, 6 Gazeller og 10 år på bagen.<br />Ambitionerne er store, og vi er inde i en spændende udvikling, med ekspandering og udvikling på alle planer.<br />Vores kontor er spækket med kunst. Malerierne er flere steder meterlange, og alle vægflader har sit eget værk. På gulvet mellem skrivebordene står pompøse elefantskulpturer. De fylder omtrent som buttede heste, og på en hylde i kælderen marcherer 6 Gazelle-statuetter side om side. Her er plads til store tanker.</p>
      <Testimonial testimonial={this.props.testimonial.testimonial} author={this.props.testimonial.author} />
      <p>Hvis du vil vide mere om dine jobmuligheder hos Freetrailer, så gå på opdagelse her på vores jobside. Du kan finde opslag om ledige stillinger, og du kan tilmelde dig vores nyhedsbrev.</p>
      <p><strong>Tips til din ansøgning</strong><br/>
        Jo mere målrettet din ansøgning er, jo større er din chance for at komme til en personlig samtale.<br/>Overvej derfor:<br/>
      </p>
        <ul>
          <li>At lave research på os, for at matche vores værdier til dine egne.</li>
          <li>Læse stillingsopslaget grundigt.</li>
          <li>Suppler ansøgningen med relevante oplysninger, så vi ved, hvad du kan gøre for os, og hvad vi kan gøre for dig.</li>
          <li>Motiver din ansøgning, så der ikke er nogen tvivl om, hvorfor du er den rette person til jobbet.</li>
          <li>En god ansøgning for os fylder ikke mere end en A4 side, og er struktureret, så læseren kan danne sig et godt og hurtigt indtryk.</li>
        </ul>

      <p></p>
      <p>Følg Freetrailer på <a href="https://www.linkedin.com/company/1513409?trk=tyah&trkInfo=clickedVertical%3Acompany%2Cidx%3A1-1-1%2CtarId%3A1429624032353%2Ctas%3Afreetrailer" target="_blank">LinkedIn</a></p>
      </Col>
      </Row>
      </Grid>
    );
  }
}

Job.defaultProps = {
  headingContent: 'Job',
  subHeadingContent:'Er du interesseret i at arbejde i en visionær og frembrusende virksomhed?',
  testimonial : {author:'Allan Sønderskov Darré', testimonial: 'Vi er meget lidt formelle og har stor respekt for individet. Alle har det sjovt sammen, men kan også arbejde igennem. Og hvis du tager ansvar, får du også lov til at tage beslutninger'}
};

export default Job;
