import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App