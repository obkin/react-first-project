import { useState } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar"
import { AuthContext, JWTContext } from "./context/context";

const App = () => {
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);

  return(
    <div>
      <AuthContext.Provider value={{
        isUserAuthorized,
        setIsUserAuthorized,
      }}>
      <JWTContext.Provider value={{
        jwt: localStorage.getItem("jwt"),
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
      </JWTContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
