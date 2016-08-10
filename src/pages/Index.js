require('normalize.css/normalize.css');
import { Grid, Row, Col } from 'react-bootstrap';
import React from 'react';
import FTVideo from '../components/Index/FTVideo'
import BookTrailer from '../components/Index/BookTrailer'
import LatestNews from '../components/Index/LatestNews'
import HotQuestions from '../components/Index/HotQuestions'
import questionsByCategory from '../data/questionsCategories.json'

class Index extends React.Component {
	 constructor(props) {
      super(props);

      this.state = {
         questionsByCategory: [],
         articles:[
          {title: 'XL-BYG klar med gratis trailerudlejning', description: 'XL-Byg C. F. Petersen & Søn A/S har indgået samarbejde med Freetrailer, så kunder i byggecentrene i Slagelse, Køge, Karise og Stenlille nu gratis kan låne en trailer.', date:'27-06-2015'},
          {title: 'Trailerfirma med vokseværk', description: 'Om fem år er gratiskonceptet freetrailer.dk på plads i en lang række lande i Europa og etableret i USA.', date:'21-04-2015'},
          {title: 'Succesrigt dansk trailerkoncept vokser med rekordfart', description: 'Nu kan også Ikea-kunder i Norge leje gratis trailere fra danske Freetrailer. Deleøkonomien giver firmaet medvind, siger eksperter.', date:'03-04-2015'},
          {title: 'Trailerfabrik scorer stort overskud efter et ordentligt rap over nallerne', description: 'Den familieejede trailervirksomhed Variant i Vejle nyder nu godt af spareplan fra kriseårene.', date:'16-03-2015'}
        ]
      }
   }
   componentDidMount() {

     this.setState({questionsByCategory: questionsByCategory});
   }
    render() {
        return (
          <div>
          <Grid className="book-cta">
              <Row>
                   <Col md={12}>
                      <hgroup className="text-center">
                          <h2>Freetrailer - nemt & hurtigt!</h2>
                          <h3>Find en gratis trailer i hele landet eller reserver online ...</h3>
                      </hgroup>
                   </Col>
               </Row>
          </Grid>
					<div className="video-wrap"><FTVideo /></div>
          <div className="book-wrap">
              <Grid>
                  <BookTrailer/>
              </Grid>
          </div>
          <div className="content-wrap">
          <Grid>
              <Row>
              	<Col md={6}>
              		<LatestNews articles={this.state.articles}/>
              	</Col>
              	<Col md={6}>
              		<HotQuestions questionsByCategory={this.state.questionsByCategory}/>
              	</Col>
              </Row>
          </Grid>
          </div>
          </div>
    );}
}

Index.defaultProps = {};

export default Index;
