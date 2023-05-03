import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemons">These things</NavLink>
      <NavLink to="/add-pokemon">Add a thing</NavLink>
    </nav>
  )
}
