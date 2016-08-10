import {  Link } from 'react-router';
import React from 'react';
import StringReplace from '../StringReplace';


class AboutNavItem extends React.Component {


    render() {
    	var { title } = this.props;
      var linkName  = StringReplace(title);
   		const { subText } = this.props;
      const { icon } = this.props;

        return (
        	<div className="col-md-4 about-item">
          		<Link to={'/om-freetrailer/' + linkName}>
                <div className={'icon-wrap ' + icon }></div>
                <h2>{ title }</h2>
                <div>{subText}</div>
              </Link>

          </div>
    );}
}

export default AboutNavItem;
