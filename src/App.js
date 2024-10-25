import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Vitrine from "./pages/Vitrine";

const App = () => (
  <Router>
    <Routes>
      <Route path="/vitrine" element={<Vitrine />} />
      <Route path="/" element={<Navigate to="/Vitrine" />} />

    </Routes>
  </Router>
);

export default App;
