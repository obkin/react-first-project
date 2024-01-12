import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Error from "./pages/Error";

const App = () => {
  return(
    <>
      <header>
        <nav>
          <Link className="nav__item" to="/">Home</Link>
          <Link className="nav__item" to="/posts">Posts</Link>
        </nav>
      </header>

      <main className="section__main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </main>

      <footer>
        <a href="https://github.com/obkin">© 2021 - Created by obkin</a>
      </footer>

    </>
  );
}

export default App;
