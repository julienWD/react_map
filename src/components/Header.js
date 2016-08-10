import React from 'react';

import { Grid } from 'react-bootstrap';
import Mynav from './Header/Nav'


class Header extends React.Component {

    render() {
     const { location } = this.props;
        return(
         <header>
             <Grid>
            	 <Mynav location={location}/>
            </Grid>
       	</header>
        );
    }
}

Header.defaultProps = {};

export default Header;
