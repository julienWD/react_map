import React from 'react';

import TeamMember from './TeamMember'

class Department extends React.Component {

  render() {

    var members = this.props.members.map(function(member , i) {
      return <TeamMember key={i}
      image={member.image}
      name={member.name}
      position={member.position}
      phone={member.phone}
      email={member.email} />
    });
    return (
      <div className="employees-container clearfix">
      <h3 name={this.props.department}>{this.props.department}</h3>
      <div className="row">{members}</div>
      </div>
    );
  }
}

Department.defaultProps = {

};

export default Department;
