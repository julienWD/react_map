import React from 'react';

import Testimonial from './Testimonial'

class TestimonialsContainer extends React.Component {

    render() {

    var testimonials = this.props.testimonials.map(function(testimonial , i) {
      return <Testimonial key={i}
                       testimonial={testimonial.testimonial}
                       author={testimonial.author} />
    });
        return(
            <div className="testimonials-container">
              {testimonials}
            </div>
        );
    }
}

TestimonialsContainer.defaultProps = {};

export default TestimonialsContainer;
