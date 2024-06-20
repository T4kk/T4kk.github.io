import React from 'react';
import MapContainer from './MapContainer';
import './koreapage.css';

function KoreaPage() {
  const places = [
    { name: 'Place 1', lat: 37.5665, lng: 126.9780 },
    { name: 'Place 2', lat: 37.5651, lng: 126.9895 },
  ];

  return (
    <div className='korea-container'>
      <h2>Korea Page</h2>
      <MapContainer places={places} />
    </div>
  );
}

export default KoreaPage;
