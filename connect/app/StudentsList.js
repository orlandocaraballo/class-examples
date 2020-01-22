import React from "react";
import { connect } from "react-redux";
import { INCREMENT_COUNT } from "./actionTypes";
import { loadStudents } from "./actionCreators";

function StudentsList(props) {
  const { students } = props;

  return (
    <div>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    students: state.students.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadStudents: () => {
      dispatch(loadStudents());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
