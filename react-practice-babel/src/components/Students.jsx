import React, { Component } from "react";
import Student from "./Student";
import styles from "./students.module.css";
import {
  replaceStudents,
  addStudent,
  fetchStudents
} from "../redux/actionCreators";
import { connect } from "react-redux";

class Students extends Component {
  async componentDidMount() {
    // const data = await (await fetch(
    //   "https://sei-api.herokuapp.com/students"
    // )).json();

    this.props.fetchStudents();

    // const data = await res.json();
    // setup our subscriptions
    // store.subscribe(() => this.setState(store.getState));
    // store.subscribe(() => console.log(store.getState()));

    // dispatch our replace students action
    // this.unsubscribe = this.props.replaceStudents(shuffle(data), data.length);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit = event => {
    // prevent form submission
    event.preventDefault();

    const { nameInput, genderInput, knownForInput, ageInput } = event.target;

    const id = this.props.count + 9000;

    this.props.addStudent({
      id: id,
      name: `${nameInput.value} ${id}`,
      gender: genderInput.value,
      knownFor: knownForInput.value,
      age: ageInput.value,
      cohort: {
        id: 10,
        name: "new cohort"
      }
    });
  };

  render() {
    const studentElements = this.props.students.map(student => (
      <li key={student.id} className={styles.student}>
        <Student student={student} id={student.id} />
      </li>
    ));

    return (
      <React.Fragment>
        <form action="post" onSubmit={this.handleSubmit}>
          <input type="text" name="nameInput" id="" placeholder="Name" />
          <input type="text" name="ageInput" id="" placeholder="Age" />
          <input type="text" name="genderInput" id="" placeholder="Gender" />
          <input
            type="text"
            name="knownForInput"
            id=""
            placeholder="Known for"
          />
          <input type="submit" value="Create Rando Student!" />
        </form>
        <ul className={styles.students}>{studentElements}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  students: state.students
});

const mapDispatchToProps = dispatch => ({
  replaceStudents: (students, count) =>
    dispatch(replaceStudents(students, count)),
  addStudent: student => dispatch(addStudent(student)),
  fetchStudents: () => dispatch(fetchStudents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
