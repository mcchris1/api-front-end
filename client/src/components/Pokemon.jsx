import { Link } from "react-router-dom";

export default function Pokemon({pokemon}) {
 
  return (
    <div>
      <Link to={`/pokemons/${pokemon._id}`}>
        <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} /> 
      </Link>
    </div>
  )
}
