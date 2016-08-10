import React from 'react';
import location from '../../data/location.json';

class AdressReservationShop extends React.Component {

  constructor(props) {
   super(props);

   this.state = {
      id : 0,
      getLocation : []
   }
 }
 componentWillMount(){
   this.state.id = this.props;
   this.findLocation();
  }

  findLocation(){
    var l = location.length;
    var temp = [];

    for(var i = 0; i<l;i++){
      //console.log(location[i].LokationID + "     " + this.state.id);
      if((location[i].LokationID) == (this.state.id.id)){
        temp.push(location[i]);
        break;
      }
    }
    this.state.getLocation = temp;
    return temp;
  }

  render(){
    const style = {
      margin: '30px'

    };
    return(
      <div style={style}>
        <h4> { this.state.getLocation[0].LokationName}  </h4>
        <p>  {this.state.getLocation[0].LokationAdresse_1}  <br />
             {this.state.getLocation[0].LokationPostnr + ' , ' + this.state.getLocation[0].LokationBy }
        </p>
      </div>
    );
  }
}
export default AdressReservationShop;
