import React, { useState, useEffect } from 'react';
import Visualization from './components/Visualization';
import Analytics from './components/Analytics';
import Prediction from './components/Prediction';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>AI Apex Insight Dashboard</h1>
      <Visualization data={data} />
      <Analytics data={data} />
      <Prediction data={data} />
    </div>
  );
}

export default App;
