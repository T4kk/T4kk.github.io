import React, { useEffect } from 'react';
import './mapcontainer.css';

const MapContainer = () => {

  useEffect(() => {
    const initializeMap = () => {
      const { kakao } = window;

      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new kakao.maps.LatLng(37.54699, 127.09598),
        level: 4,
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);

      const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
      const imageSize = new kakao.maps.Size(64, 69);
      const imageOption = { offset: new kakao.maps.Point(27, 69) };

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      const markerPosition = new kakao.maps.LatLng(37.54699, 127.09598);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);

      const content = '<div class="customoverlay">' +
        '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
        '    <span class="title">Test Location</span>' +
        '  </a>' +
        '</div>';

      const position = new kakao.maps.LatLng(37.54699, 127.09598);

      new kakao.maps.CustomOverlay({
        map: map,
        position: position,
        content: content,
        yAnchor: 1,
      });
    };

    initializeMap();
  },);

  return (
    <div id="map" style={{ width: '100%', height: '700px' }}></div>
  );
};

export default MapContainer;
