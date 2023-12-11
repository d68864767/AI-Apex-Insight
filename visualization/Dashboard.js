import React from 'react';
import Visualization from '../components/Visualization';
import Analytics from '../components/Analytics';
import Prediction from '../components/Prediction';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>AI Apex Insight Dashboard</h1>
      <Visualization data={[]} />
      <Analytics />
      <Prediction />
    </div>
  );
}

export default Dashboard;
