import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PageHeading from '../../components/PageHeading';
import Departments from '../../components/Team/Departments';
import BackLink from '../../components/BackLink';
import AsideNavigation from '../../components/AsideNavigation';
import companyOrganisation from '../../data/companyOrganisation.json'

class Team extends React.Component {

  constructor(props) {
    super(props);
    this.state = { departments: [],
                   asideLinks:[]
                 }
  }

  componentDidMount() {

    this.setState({departments : companyOrganisation.departments});
    setTimeout(() => {
      this.createAsideLinks()
    }, 100);
  }

  createAsideLinks(){
  var currentPath = this.props.location.pathname;
    var asideLinks = this.state.departments.map(function(department){
      return {
        'link': currentPath + '#'+ department.name,
        'linkName': department.name
      };

    });

    this.setState({asideLinks: asideLinks});
  }
  render() {
    return (
      <Grid>
      <Row>
      <Col xs={12} md={3}>
        <BackLink link="/om-freetrailer"/>
	      <AsideNavigation asideLinks={this.state.asideLinks}/>
      </Col>
      <Col xs={12} md={8}>
      <PageHeading headingContent="Medarbejdere"
                  subHeadingContent="Hver enkelt medarbejder hos Freetrailer spiller en helt unik rolle, og påvirker Freetrailer med deres individuelle personligheder. Det giver virksomheden styrke, og gør den både alsidig, ambitiøs og levende." />
      <Departments departments={this.state.departments}/>
      </Col>
      </Row>
      </Grid>
    );
  }
}

export default Team;
