import { useState } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar"
import { AuthContext } from "./context/context";

const App = () => {
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);

  return(
    <div>
      <AuthContext.Provider value={{
        isUserAuthorized,
        setIsUserAuthorized,
      }}>
        <header>
          <Navbar/>
        </header>

        <main>
          <AppRouter/>
        </main>

        <footer>
          <a href="https://github.com/obkin">© 2021 - Created by obkin</a>
        </footer>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
