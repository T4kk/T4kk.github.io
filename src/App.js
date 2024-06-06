import React, { useState } from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import KoreaPage from './components/KoreaPage';
import JapanPage from './components/JapanPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('korea');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Header />
      <div className="tabs">
        <Tab
          label="Korea"
          isActive={activeTab === 'korea'}
          onClick={() => handleTabClick('korea')}
        />
        <Tab
          label="Japan"
          isActive={activeTab === 'japan'}
          onClick={() => handleTabClick('japan')}
        />
      </div>
      <div className="content">
        {activeTab === 'korea' && <KoreaPage />}
        {activeTab === 'japan' && <JapanPage />}
      </div>
    </div>
  );
}

export default App;
