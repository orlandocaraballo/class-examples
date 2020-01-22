import React, { Component } from "react";
import styles from "./student.module.css";
import { removeStudent } from "../redux/actionCreators";
import { connect } from "react-redux";

class Student extends Component {
  handleRemoveStudent = e => {
    this.props.removeStudent(this.props.id);
  };

  render() {
    const { name, gender, knownFor, cohort } = this.props.student;

    return (
      <React.Fragment>
        <h2 className={styles.strong}>{name}</h2>
        <ul className={styles.details}>
          <li>{gender}</li>
          <li>{knownFor}</li>
          <li>{cohort.name}</li>
        </ul>
        <button onClick={this.handleRemoveStudent}>Remove me!</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  students: state.students
});

const mapDispatchToProps = dispatch => ({
  removeStudent: id => dispatch(removeStudent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
