import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
// Component for the loading icon
class Loading extends React.Component {
  // if you should see the loading or not
  handleLoading() {
    const { value } = this.props;
    const { id } = this.props;
    // if the loading div exists
    if (document.getElementById(id)) {
      // if value is true - its still loading ...
      if (value === true) {
        // show the loading icon
        document.getElementById(id).style.display = 'block';
      } else {
        // hide the loading icon
        document.getElementById(id).style.display = 'none';
      }
    }
  }
  render() {
    const { id } = this.props;
    this.handleLoading();
    return(
      <div id={id} style={{ position: 'absolute', left: '50%', top: '50%', zIndex: 100, marginLeft: '-35px', marginTop: '-35px' }}>
          <CircularProgress size={1}
            style={{ opacity: 1.0 }}
          />
      </div>
    );
  }
}
export default Loading;
