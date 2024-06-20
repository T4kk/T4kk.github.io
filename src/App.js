import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Itinerary from './components/Itinerary';
import KoreaPage from './components/KoreaPage';
import JapanPage from './components/JapanPage';
import './App.css';

const App = () => {
  const kakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}`;
  document.body.appendChild(script);
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/japan" element={<JapanPage />} />
        <Route path="/korea" element={<KoreaPage />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </HashRouter>
  )
}

export default App