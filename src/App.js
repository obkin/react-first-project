import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar"

const App = () => {
  return(
    <div>
      <header>
        <Navbar/>
      </header>

      <main>
        <AppRouter/>
      </main>

      <footer>
        <a href="https://github.com/obkin">© 2021 - Created by obkin</a>
      </footer>
    </div>
  );
}

export default App;
