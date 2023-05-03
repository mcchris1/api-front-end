import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { updatePokemon, getPokemon } from '../services/pokemons';

export default function EditPokemon() {
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: "",
    height: "",
    abilities: ""
  })

  let navigate = useNavigate()
  let { id } = useParams()

  const fetchPokemon = async () => {
    const onePokemon = await getPokemon(id)
    setPokemon(onePokemon)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setPokemon((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePokemon(id, pokemon)
    navigate(`/pokemons/${id}`, {replace: true})
  }

  return (
    <div>
      <h1>Make a thing</h1>
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
        <button type="submit">Make thing</button>
      </form>
    </div>
  )
}
