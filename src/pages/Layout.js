require('normalize.css/normalize.css');
// require('bootstrap/dist/css/bootstrap.css');


window.jQuery = window.$ = require('jquery/dist/jquery.min');
require('bootstrap/dist/js/bootstrap.min');

require('styles/App.css');

import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


class Layout extends React.Component {

    render() {
      const homeClass = this.props.location.pathname === '/' ? 'home main-wrap' : 'main-wrap';
      const { location } = this.props;
      let footer = (<div className="footer-container" id="footer-container"><Footer/></div>);
      if (document.getElementById('header-container')) {
        if (window.location.href.includes('book-en-trailer')) {
          document.getElementById('header-container').style.position = 'fixed';
          footer = null;
        } else {
          document.getElementById('header-container').style.position = 'relative';
          footer = (<div className="footer-container" id="footer-container"><Footer/></div>);
        }
      }
        return (
            <div className = {homeClass}>
                <div className="header-container" id="header-container"><Header location={location}/></div>
                <div className="main-container" style={{paddingTop: 0}}>{this.props.children}</div>
                {footer}
            </div>
        );
    }
}

export default Layout;
