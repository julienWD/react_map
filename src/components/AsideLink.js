import React from 'react';
import { Link } from 'react-router';

class AsideLink extends React.Component {

    render() {
        return (
                <li>
	               <Link to={this.props.link} className="aside-nav-link">{this.props.linkName}</Link>
                </li>
        );
    }
}

AsideLink.defaultProps = {};

export default AsideLink;
