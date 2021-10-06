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

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
