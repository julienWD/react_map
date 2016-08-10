import React from 'react';
import FaqNavItem from './FaqNavItem'

class FaqNav extends React.Component {


    render() {
    var questionsCategories = this.props.questionsCategories.map(function(category , i) {
      return <FaqNavItem key={i}
                       title={category.title}
                       subTitle={category.subTitle}
                       color = {category.color} />
    });

        return (
          <div>{questionsCategories}</div>
    );}
}

FaqNav.defaultProps = {};

export default FaqNav;
