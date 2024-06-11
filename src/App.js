import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Itinerary from './components/Itinerary';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/japan" element={<div>Japan Page</div>} />
        <Route path="/korea" element={<div>Korea Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </HashRouter>
  )
}

export default App