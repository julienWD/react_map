import React from 'react';


class Question extends React.Component {


    render() {
    	var { title } = this.props;
		  var { content } = this.props;
      function createMarkup() { return {__html: content}; }

        return (
        	<div className="faq-item">
            <h2 name={ title }> { title }</h2>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
    );}
}

export default Question;
