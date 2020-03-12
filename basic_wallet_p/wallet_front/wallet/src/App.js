import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  //needs balance and all transactions(sender and recipient)
  const [data, setData] = useState({
    id: '',
    balance: 0,
    allTransactions: []
  });

  const getInfo = () => {
    axios.get('http://localhost:5000/chain')
    .then(res => {
      console.log(res.data)
      const allTransactions = res.data.chain
      setData({...data, allTransactions})
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    getInfo()
  }, []);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
