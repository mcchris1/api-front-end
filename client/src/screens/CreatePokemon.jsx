import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createPokemon } from '../services/pokemons.js';

export default function CreatePokemon() {
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: "",
    height: "",
    abilities: ""
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setPokemon((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPokemon(pokemon)
    navigate("/pokemons", {replace: true})
  }

  return (
    <div>
      <h1>Create a thing</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your thing's name"
          name="name"
          value={pokemon.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your thing's weight"
          name="weight"
          value={pokemon.weight}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your thing's height"
          name="height"
          value={pokemon.height}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your thing's abilities"
          name="abilities"
          value={pokemon.abilities}
          onChange={handleChange}
        />
        <button type="submit">Make Thing Mkay</button>
      </form>
    </div>
  )
}
