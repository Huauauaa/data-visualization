import React, { useEffect, useState } from 'react';
import './App.css';
// import Dashboard from './views/Dashboard';
import Demo from './components/Demo';
import BarChart from './components/BarChart';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://randomuser.me/getStats');
      console.log(response.data);
      setData(response.data);
    })();
  }, []);
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Demo data={data}/>
      <BarChart data={data}/>
    </div>
  );
}

export default App;
