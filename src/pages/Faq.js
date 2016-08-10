import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FaqNav from '../components/FaqNav';
import PageHeading from '../components/PageHeading';
import questionsByCategory from '../data/questionsCategories.json'

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionsCategories: [] }
  }

  componentDidMount() {
    this.setState({questionsCategories:questionsByCategory});
  }
  render() {

    const rootFaq = this.props.location.pathname === '/spoergsmaal-svar' ? 'faq-nav-full' : 'hidden';
    return (
      <Grid>
      <Row>

      <Col xs={12} md={9} className={rootFaq}>
      <PageHeading headingContent={this.props.headingContent} subHeadingContent={this.props.subHeadingContent} />
      <FaqNav questionsCategories={this.state.questionsCategories}/>
      </Col>
      </Row>
      </Grid>
    );
  }

}

Faq.defaultProps = {
    headingContent: 'Spørgsmål & svar',
    subHeadingContent: 'Her kan du finde svar på de mest stillede spørgsmål til udlån af Freetrailere'
};

export default Faq;
