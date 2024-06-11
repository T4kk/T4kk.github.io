import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Itinerary from './components/Itinerary';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App