import React from "react";
import ReactDOM from "react-dom";

const Header = () => <header>Header</header>;

const Article = () => <article>Article</article>;

const Aside = () => <aside>Aside in Class</aside>;

const Main = () => (
  <main>
    <Article />
    <Aside />
  </main>
);

const Footer = () => <footer>Footer</footer>;

// class App extends React.Component {
//   render() {
//     return "<div>Hello Class!</div>";
//   }
// }

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// <[Component name] /> is known as JSX syntax
ReactDOM.render(<App />, document.getElementById("root"));
