import './App.css';
import React, {useEffect, useState} from 'react';
import Home from './pages/home.jsx'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])

  const getItems = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/doacoes`)
      console.log(response.data)
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="App">
      <Home 
        items={items}
      />
    </div>
  );
}

export default App;
