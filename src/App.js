import Home from "./pages/Home";
import About from "./pages/About";
import PaperOverlay from "./Components/PaperOverlay";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div class="p-6 min-h-screen">
        <Header />
        <PaperOverlay />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </div>
    </Router>
  );

}

export default App;
