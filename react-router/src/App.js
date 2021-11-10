import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const TITLE = "Page title";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: [{ name: "orlando" }, { name: "john" }] });
  }

  render() {
    return (
      <footer>
        <h2>
          {this.state.people.map((person) => (
            <li>{person.name}</li>
          ))}
        </h2>
      </footer>
    );
  }
}

function Header() {
  return (
    <header>
      <Nav />
      <h2>Header Text</h2>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/page-1">Page 1</Link>
      <Link to="/page-2">Page 2</Link>

      <Link to="/puppies/1">Puppies 1</Link>
      <Link to="/puppies/2">Puppies 2</Link>
      <Link to="/puppies/3">Puppies 3</Link>
      <Link to="/test-props?something=else">Test Props Page</Link>
    </nav>
  );
}

function Homepage(props) {
  return (
    <main>
      <h1>{props.title}</h1>
      This is the homepage...
      <br />
      Here is a bunch of text
      <br />
      That I am writing here
      <br />
      Something like That
      <br />
    </main>
  );
}

function Page1(props) {
  console.log(props);

  return (
    <main>
      <img alt="Page 1" src="fry.png" />
    </main>
  );
}

function Page2() {
  return (
    <main>
      <img alt="Page 2" src="bender.jpg" />
    </main>
  );
}

function PuppyPage(props) {
  console.log(props);
  return <p>Puppy id -> {props.match.params.puppyId}</p>;
}

function TestPropsPage(props) {
  return (
    <p>
      Name -> {props.name} / {console.log(props)}
    </p>
  );
}

function App() {
  return (
    <Router>
      <Header />

      <Route
        exact
        path="/"
        render={(props) => <Homepage title={TITLE} {...props} />}
      />
      <Route path="/page-1" component={Page1} />
      <Route path="/page-2" component={Page2} />
      <Route path="/puppies/:puppyId" component={PuppyPage} />
      <Route
        path="/test-props"
        render={(props) => (
          <TestPropsPage name="Orlando Caraballo" {...props} />
        )}
      />

      <Footer />
    </Router>
  );
}

export default App;
