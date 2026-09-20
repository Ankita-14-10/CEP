import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";

import "./App.css";

function App() {

  return (

    <HashRouter>

      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/assessment"
            element={<Assessment />}
          />

          <Route
            path="/careers"
            element={<Careers />}
          />

          <Route
            path="/careers/:id"
            element={<CareerDetails />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/resources"
            element={<Resources />}
          />

        </Routes>

      </main>

      <footer>

        <h3>
          🎓 MyCareer Guide
        </h3>

        <p>
          Empowering students through accessible
          career guidance.
        </p>

        <small>
          © 2026 MyCareer Guide
        </small>

      </footer>

    </HashRouter>
  );
}

export default App;
