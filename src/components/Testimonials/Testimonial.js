import React from 'react';

class Testimonial extends React.Component {


    render() {
    	var { testimonial } = this.props;
   		var { author } = this.props;
        return (
        	<div className="testimonial">

           <div className="testimonial-content">
              {testimonial.split('\n').map(function(item, i) {
                    return (
                      <span key={i}>
                        {item}
                        <br/>
                      </span>
                    )
                  })}

          </div>
            <div className="testimonial-author">{author}</div>
          </div>
    );}
}

Testimonial.defaultProps = {};

export default Testimonial;
