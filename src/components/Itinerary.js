import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './itinerary.css';

const Itinerary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const spreadsheetId = '1iqyyX4bVs5KfFzkROStpnqEOK_907hZq2Nu65N5g16k';
      const range = 'Itinerary!A1:I33';
      const apiKey = 'AIzaSyD7x1llFHhKE8ssFUYsccWSckRvlKRfQ2g';
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setData(response.data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const setRowColor = () => {
      const cityColorMap = {
        Osaka: '#FFCCCC',
        Tokyo: '#CCCCFF',
        Seoul: '#CCFFCC',
        'Ho Chi Minh City': '#FFDAB9',
        Melbourne: '#CEDCE9'
      };

      const rows = document.querySelectorAll('#itineraryTable tbody tr');

      rows.forEach(row => {
        const city = row.cells[5].textContent;
        const cityColor = cityColorMap[city];
        if (cityColor) {
          row.style.backgroundColor = cityColor;
        }
      });
      console.log(data)
    };
    setRowColor();
  }, [data]);

  return (
    <div className='itinerary-container'>
      <h1>Itinerary</h1>
      <table id="itineraryTable" className="itinerary-table">
        <thead>
          {data.length > 0 && (
            <tr>
              {data[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell.replace(/\n/g, '<br />') }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itinerary;
