require('normalize.css/normalize.css');

import { Grid, Row, Col } from 'react-bootstrap';
import React from 'react';
import PageHeading from '../../components/PageHeading';
import AboutNavItem from '../../components/About/AboutNavItem';
import BackLink from '../../components/BackLink';


class AboutHome extends React.Component {

    render() {
      var aboutCategories = this.props.aboutCategories.map(function(category , i) {
          return <AboutNavItem key={i}
                       title={category.title}
                       subText = {category.subText}
                       icon = {category.icon} />

      });
        return (
        	<Grid>
             <Row>
                <Col xs={12} md={3}><BackLink link="/"/></Col>
                <Col xs={12} md={8}>
                    <PageHeading headingContent={this.props.headingContent}
                                 subHeadingContent={this.props.subHeadingContent} />
                    <Row>
                        <Col xs={12}>

                        {aboutCategories}

                        </Col>
                    </Row>
                </Col>
            </Row>
        	</Grid>
        );
    }
}

AboutHome.defaultProps = {
headingContent:'Om Freetrailer',
subHeadingContent:'Velkommen til Freetrailer. Vi stræber efter at tænke anderledes og udforme ideer, der gør transport fra A til B så nem som mulig. Vi ved at folk har fået mindre tid, og gerne vil bruge deres penge fornuftigt. Hos Freetrailer er convenience det vigtigste, som vi kan tilbyde kunden. En nem løsning, en gratis løsning.',
aboutCategories: [
            { title: 'Medarbejdere', subText: 'Hver enkelt medarbejder hos Freetrailer spiller en helt unik rolle.', icon: 'users'},
            { title: 'Historien om Freetrailer', subText: 'Freetrailer konceptet er båret frem af nutidens deleøkonomi.', icon: 'bulb'},
            { title: 'Hvad er Freetrailer', subText: 'Freetrailer konceptet er båret frem af nutidens deleøkonomi.', icon: 'trailer'},
            { title: 'Det siger brugerne', subText: 'Det var dyrt at købe min nye lejlighed, men det var gratis at flytte.', icon:'messege'},
            { title: 'Hold dig opdateret på Freetrailer', subText: 'Tilmeld dig vores nyhedsbrev.', icon:'mail'},
            { title: 'Job', subText: 'Vil du arbejde hos os?', icon: 'search-user'},
            { title: 'Kontakt os', subText: 'Hovednummer: 88 537 700', icon: 'phone'},
            { title: 'Presse', subText: 'Presseinformation og materiale', icon: 'leaf'},
            { title: 'Samarbejdspartnere', subText: 'Læs vores samarbejdspartneres cases.', icon: 'thumbs-up'},
            { title: 'Fotoarkiv', subText: 'Download fotos', icon: 'search-user'}
         ]};

export default AboutHome;
