import './App.css';
import { useState, useEffect } from 'react';

function Chinpokomon({ name, weight }) {
  return (
    <div>
     <h1>{name}</h1>
     <p>{weight}</p>
     <img src="https://picsum.photos/200" alt="placeholder image for "{name} />

   </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://simple-pokemon-api.herokuapp.com`
      )
      .then((response) => response.json())
      .then(setData);
  }, []);
  if(data) 
    return (
      <Chinpokomon 
        name={data.name}
        weight={data.weight}
      />
  return <h1>Data</h1>; 
}

export default App;
