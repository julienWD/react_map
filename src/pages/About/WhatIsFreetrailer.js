import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import BackLink from '../../components/BackLink';

class WhatIsFreetrailer extends React.Component {

    render() {
        return (
           <Grid>
          	<Row>
                <Col xs={12} md={3}><BackLink link="/om-freetrailer"/></Col>
                <Col xs={12} md={9}>
                	<article>
                    <PageHeading headingContent={this.props.headingContent}
                                 subHeadingContent={this.props.subHeadingContent} />
                 	<p>
                        Grundlagt i 2004 med en forretningsmodel bygget op om gratis lån af trailere,
                        er Freetrailer på kort tid vokset til at være en vigtig spiller i den deleøkonomiske verden.
                        Visionen er at udnytte de ressourcer, der allerede eksisterer for at skabe mere overskud og mere miljøvenlig transport.
                        Freetrailer har etableret og udbygget et marked for udlån af Freetrailere, hvor kunder gratis kan låne en trailer,
                        og hvor trailerudlejere får eksponeret deres virksomhed, flere kundebesøg samt mulighed for øget salg.
                    </p>
                 	<p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gnh_WjNeCkk?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen=""></iframe>
                    </p>
                    </article>
                </Col>
            </Row>
           </Grid>
        );
    }
}

WhatIsFreetrailer.defaultProps = {
    headingContent: 'Hvad er Freetrailer',
    subHeadingContent: 'Freetrailer er gratis trailerudlån, der ikke er købsbetinget, hos partnere i Danmark, Sverige, Tyskland, Norge m.fl.'
};

export default WhatIsFreetrailer;
