import { useState, useEffect } from 'react';
import { getPokemon, deletePokemon } from '../services/pokemons.js';
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DetailPokemon() {
  const [pokemon, setPokemon] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchPokemon = async () => {
    const onePokemon = await getPokemon(id)
    setPokemon(onePokemon)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.weight}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.abilities}</p>
      <div>
        <button>
          <Link to={`/pokemons/${pokemon._id}/edit`}>
          Edit the Thing
          </Link>
        </button>
        <button onClick={() => {
          deletePokemon(pokemon._id)
          navigate("/pokemons", {replace: true})
        }}>Delete Pokemon</button>
      </div>
    </div>
  )
}