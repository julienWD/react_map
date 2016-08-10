import {  Link } from 'react-router';
import React from 'react';
import StringReplace from '../StringReplace';


class PartnerNavItem extends React.Component {


    render() {
    	var { title } = this.props;
      var linkName  = StringReplace(title);
      var { logo } = this.props;

        return (
        	<div className="col-md-4 about-item">
          		<Link to={'/om-freetrailer/samarbejdspartnere/' + linkName}>
                <img src={logo} />
                <h2>{ title }</h2>
              </Link>

          </div>
    );}
}

export default PartnerNavItem;
