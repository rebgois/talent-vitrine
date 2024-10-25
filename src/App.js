import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vitrine from "./pages/Vitrine";

const App = () => (
  <Router>
    <Routes>
      <Route path="/vitrine" element={<Vitrine />} />
    </Routes>
  </Router>
);

export default App;
