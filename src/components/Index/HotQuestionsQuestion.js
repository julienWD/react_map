import React from 'react';
import { Link } from 'react-router';
import StringReplace from '../StringReplace';

class HotQuestionsQuestion extends React.Component {

    render() {
      var { categorySubTitle } = this.props;
      var linkName = StringReplace(categorySubTitle);
        return (
                <li>
	               <Link to={'/spoergsmaal-svar/' + linkName + '#' + this.props.title}>{this.props.title}</Link>
                </li>
        );
    }
}

export default HotQuestionsQuestion;
