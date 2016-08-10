import {  Link } from 'react-router';
import React from 'react';


class BackLink extends React.Component {


    render() {
    	const { link } = this.props;
        return (
            <Link to={link} className="back-link"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Tilbage</Link>
    );}
}

export default BackLink;
