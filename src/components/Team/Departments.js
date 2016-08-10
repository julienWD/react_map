import React from 'react';
import Department from './Department'

class Departments extends React.Component {

  render() {

    var departments = this.props.departments.map(function(department , i) {
      return <Department key={i}
      department={department.name}
      members={department.members} />
    });
    return (
      <div className="departments-container">
      {departments}
      </div>
    );
  }
}

export default Departments;
