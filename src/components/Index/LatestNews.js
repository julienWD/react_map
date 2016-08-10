import React from 'react';

import LatestNewsArticle from './LatestNewsArticle'

class LatestNews extends React.Component {

    render() {

    var articles = this.props.articles.map(function(article , i) {
      return <LatestNewsArticle key={i}
                       title={article.title}
                       description={article.description}
                       date = {article.date} />
    });
        return(
            <div className="news-home">
               <h2>Nyheder</h2>
                <div>{articles}</div>
            </div>
        );
    }
}

export default LatestNews;
