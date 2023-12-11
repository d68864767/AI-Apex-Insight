import React, { useState, useEffect } from 'react';

const Prediction = () => {
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    // Fetch prediction data from the server
    fetch('/api/prediction')
      .then(response => response.json())
      .then(data => setPrediction(data.prediction))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Prediction</h2>
      <p>{prediction}</p>
    </div>
  );
};

export default Prediction;
