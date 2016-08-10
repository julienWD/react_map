require('normalize.css/normalize.css');

import {  Link } from 'react-router';
import React from 'react';
import StringReplace from './StringReplace';


class FaqNavItem extends React.Component {


    render() {
    	const { title } = this.props;
		  var { subTitle } = this.props;
   		const { color } = this.props;
      var linkName = StringReplace(subTitle);

        return (
        	<div className="faq-nav-item col-md-4">
          		<Link to={'/spoergsmaal-svar/' + linkName} activeClassName="active" className={'circle ' + color}>{ title }</Link>
          		<div className="faq-sub-title">{subTitle}</div>
          </div>
    );}
}

FaqNavItem.defaultProps = {};

export default FaqNavItem;
