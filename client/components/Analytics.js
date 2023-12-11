```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/analytics');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Analytics</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
```
