import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Default page */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Home */}
        <Route
          path="/home"
          element={<Home />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;