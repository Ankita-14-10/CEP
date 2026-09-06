import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Dashboard from "./pages/Dashboard";
import Scholarships from "./pages/Scholarships";
import Resources from "./pages/Resources";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

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
            path="/scholarships"
            element={<Scholarships />}
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

    </BrowserRouter>
  );
}

export default App;