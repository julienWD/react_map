import React from 'react';
import trailerData from '../../data/trailerData.json'

class KindOfTrailer extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
      id : 0,
      getTrailer: [],
      url: 0
   }
 }
 componentWillMount(){
   this.state.id = this.props;
   this.setState({getTrailer: trailerData});
   var url =   window.location.href;
   url = url.substring(url.indexOf('$') + 1);
   url = url.slice(0,1);
   var temp = parseInt(url);
   if(temp == 9){
     temp = 0;
   }else if(temp == 14){
     temp = 1;
   }else{
     temp = 2;
   }
   this.setState({url : temp});
  }

  render(){
    const style = {
      textAlign : 'center',
      marginTop: '30px'
    };
    return(
      <div style={style}>
        <img src={'../../images/trailer/' + this.state.getTrailer[this.state.url].imageRes} style={{ marginBottom: 15 }}/>
        <h4> {this.state.getTrailer[this.state.url].name} </h4>
        <p> {this.state.getTrailer[this.state.url].size} </p>
      </div>
    );
  }
}

export default KindOfTrailer;
