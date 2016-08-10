import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FaqNav from '../components/FaqNav';
import BackLink from './BackLink';
import SearchField from './SearchField';
import questionsByCategory from '../data/questionsCategories.json'

class FaqCategory extends React.Component {
	constructor(props) {
    super(props);
    this.state = { questionsCategories: [] }
  }

  componentDidMount() {
		this.setState({questionsCategories:questionsByCategory});
  }
    render() {

    	      const subFaqNav = this.props.location.pathname === '/spoergsmaal-svar' ? 'hidden' : 'sub-nav clearfix';
   					const isNotFaqInner = this.props.location.pathname === '/spoergsmaal-svar' ? 'hidden' : '';
        return (
				<Grid>
          <Row>
						<Col xs={12} md={3}>
			          <p className={isNotFaqInner}><BackLink link="/spoergsmaal-svar"/></p>
			          <p><SearchField/></p>

			     </Col>
						<Col xs={12} md={9}>
	             <div className={subFaqNav}>
	   				     <FaqNav questionsCategories={this.state.questionsCategories}/>
	            </div>
							{this.props.children}
						</Col>
          </Row>
			</Grid>
        );
    }
}

FaqCategory.defaultProps = {};

export default FaqCategory;
