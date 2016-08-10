import React from 'react';

class FTVideo extends React.Component {

    render() {
        return (
          <video preload="none" autoPlay loop poster="https://s3-eu-west-1.amazonaws.com/ftg.resources/poster.jpg" id="vid">
                      <source src="https://s3-eu-west-1.amazonaws.com/ftg.resources/FreetrailerCropped.mp4" />
                      <source src="" type="video/ogg" />
                  </video>
        );
    }
}

export default FTVideo;
