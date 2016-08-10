import React from 'react';
import { Link } from 'react-router';

class LatestNewsArticle extends React.Component {

    render() {
	const { title } = this.props;
	const { description } = this.props;
    const { date } = this.props;

    return (
       <article>
        	<h2><Link to=''>{title}</Link></h2>
        	<p>{description}</p>
        	<p className="article-date">{date}</p>
      	</article>
        );
    }
}

export default LatestNewsArticle;
