import { Component } from "react";

class Header extends Component {
  render() {
    return <header>Header</header>;
  }
}

class Article extends Component {
  render() {
    return <article>Article</article>;
  }
}

class Aside extends Component {
  render() {
    return <aside>Aside</aside>;
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <Article />
        <Aside />
      </main>
    );
  }
}

class Footer extends Component {
  render() {
    return <footer>Footer</footer>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
