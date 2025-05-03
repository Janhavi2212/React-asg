import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clock from './components/Clock';
import PaginationComponent from './components/pagination';
import CharacterInfo from './components/charachterInfo';
function App() {
  return (
      <Router>
          <div className="App">
              <Clock />
              <Routes>
                  <Route path="/" element={<PaginationComponent />} />
                  <Route path="/character/:id" element={<CharacterInfo />} />
              </Routes>
          </div>
      </Router>
  );
}


export default App;

