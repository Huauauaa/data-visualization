import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://randomuser.me/getStats');
      console.log(response);
      setData(response.data);
    })();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}

export default Dashboard;
