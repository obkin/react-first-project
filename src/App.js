import { Router, Route, Link, Switch, BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";

const App = () => {
  return(
    // <Router>
    //   <div>
    //     <div>
    //       <Link to="/">About</Link>
    //       <Link to="/posts">Posts</Link>
    //     </div>
    //   </div>

    //   <Routes>
    //     <Route path="/" element={<About />} />
    //     <Route path="/posts" element={<Posts />} />
    //   </Routes>
    // </Router>

    <Posts/>
  );
}

export default App;
