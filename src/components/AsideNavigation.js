import React from 'react';
import AsideLink from './AsideLink'

class AsideNavigation extends React.Component {

    render() {
    var asideLinks = this.props.asideLinks.map(function(link , i) {
      return <AsideLink key={i}
                       link={link.link}
                       linkName={link.linkName} />
    });

        return (
          <aside><ul className="list-unstyled aside-nav">{asideLinks}</ul></aside>
    );}
}

AsideNavigation.defaultProps = {};

export default AsideNavigation;
