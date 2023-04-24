import './App.css';
import { useState, useEffect } from 'react';

function Chinpokomon({ name, weight }) {
  return (
    <div>
     <h1>{name}</h1>
     <p>{weight}</p>
     <img src="https://picsum.photos/200" alt="placeholder image for "{name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://simple-pokemon-api.herokuapp.com`
      )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;
  return (
    <Chinpokomon 
      name={data.name}
      weight={data.weight}
    />
  );
}

export default App;
