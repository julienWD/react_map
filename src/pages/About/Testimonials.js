import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import TestimonialsContainer from '../../components/Testimonials/TestimonialsContainer';
import BackLink from '../../components/BackLink';
import testimonials from '../../data/testimonials.json'

class Testimonils extends React.Component {

     constructor(props) {
      super(props);

      this.state = {
         testimonials: []
      }
   }
   componentDidMount() {
     this.setState({testimonials : testimonials});
   }
    render() {
        return (
           <Grid>

          	<Row>
                <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
                <Col xs={12} md={9}>
                	<article>
                    <PageHeading headingContent={this.props.headingContent}
                                 subHeadingContent={this.props.subHeadingContent} />
                 	<TestimonialsContainer testimonials={this.state.testimonials} />
                 	</article>
                </Col>
            </Row>
           </Grid>
        );
    }
}

Testimonils.defaultProps = {
    headingContent: 'Det siger brugerne',
    subHeadingContent: 'Jeg skulle flytte i går, og benyttede mig i den forbindelse af Freetrailer for første gang - OG DET ER IKKE SIDSTE GANG! At man kan gå på nettet, bestille en gratis trailer en dag og derefter flytte en hel lejlighed, er jo genialt. Det er uden tvivl til dato min billigste flytning, og jeg kan kun anbefale ALLE at gøre det samme.'

};

export default Testimonils;
