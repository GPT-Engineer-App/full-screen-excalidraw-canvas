import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FullscreenCanvas from "./pages/FullscreenCanvas.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/canvas" element={<FullscreenCanvas />} />
      </Routes>
    </Router>
  );
}

export default App;
