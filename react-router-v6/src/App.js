import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <header>
      <Link to="/">Homepage</Link>
      <Link to="/page-1">Page 1</Link>
      <Link to="/page-2">Page 2</Link>
      <Link to="/albums/4">Album 13</Link>
    </header>
  );
}

function Page1(props) {
  const location = useLocation();

  console.log(location);

  return <main>Page 1</main>;
}

function Page2() {
  return <main>Page 2</main>;
}

function Fallback() {
  return <main>Fallback</main>;
}

function SingleAlbum() {
  const { id } = useParams();

  return <main>The album id is {id}</main>;
}

function Main() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/albums/3");
  }

  return (
    <main>
      Main
      <button onClick={handleClick}>Go</button>
    </main>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page-1" element={<Page1 name="Maria" />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/albums/:id" element={<SingleAlbum />} />
          <Route path="*" element={<Fallback />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
