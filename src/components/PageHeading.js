import React from 'react';


class PageHeading extends React.Component {


    render() {
    	const { headingContent } = this.props;
		  const { subHeadingContent } = this.props;

        return (
        	<div>
            <h1>{headingContent}</h1>
            <p className="heading-text">{subHeadingContent}</p>
          </div>
    );}
}

PageHeading.defaultProps = {};

export default PageHeading;
