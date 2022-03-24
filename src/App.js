import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviesPage from "./components/MoviesPage";
import "./App.css"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/shop" element={<MoviesPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
