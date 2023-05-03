import Pokemon from '../components/Pokemon.jsx';
import { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemons.js';


export default function Pokemons() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    const allPokemons = await getPokemons()
    setPokemons(allPokemons)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon._id} pokemon={pokemon} />
      ))}
    </div>
  )
}
