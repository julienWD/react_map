import React from 'react';

class TeamMember extends React.Component {


    render() {
    	var { image } = this.props;
   		var { name } = this.props;
      var { position } = this.props;
      var { phone } = this.props;
      var { email } = this.props;
      var imgSrc = image ? image : '../../images/media/team/coming_soon_employee.png';
      var hasPhone = phone ? 'phone' : 'hidden';
      var hasEmail = email ? 'email' : 'hidden';
        return (
        	<div className="employee col-xs-6 col-sm-3">
            	<div className="img-wrap"><img src={imgSrc} alt={name} /></div>
              <h4>{name}</h4>
              <div><strong>{position}</strong></div>
              <address>
                <div className={hasPhone}>Tlf {phone}</div>
                <div className={hasEmail}>Email {email}</div>
              </address>
          </div>
    );}
}

TeamMember.defaultProps = {};

export default TeamMember;
