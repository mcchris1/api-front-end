import { useState, useEffect } from 'react';

// function Chinpokomon({ name, weight }) {
//   return (
//     <div>
//      <h1>{name}</h1>
//      <p>{weight}</p>
//      <img src="https://picsum.photos/200" alt="placeholder image for "{name} />
//     </div>
//   );
// }

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let [number, setNumber] = useState(0)

  const destroy = () => {
    setNumber(number++)
  }
  
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://simple-pokemon-api.herokuapp.com/pokemon`
      )
      .then(response => response.json())
      .then(pokemon => setData(pokemon))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  console.log(data)

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;
  return (
    // <Chinpokomon 
    //   name={data.name}
    //   weight={data.weight}
    // />
    <>
    {/* {data.map(pokemon => 
    
    <h2>{pokemon.name}</h2>

    )} */}
    <h1>{number}</h1>
    <button onClick={destroy}>+1</button>
    </>
  );
}

export default App;
