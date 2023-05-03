import Home from "./screens/Home.jsx";
import Nav from "./components/Nav.jsx";
import Pokemons from "./screens/Pokemons.jsx";
import DetailPokemon from "./screens/DetailPokemon.jsx";
import CreatePokemon from "./screens/CreatePokemon.jsx";
import EditPokemon from "./screens/EditPokemon.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<DetailPokemon />} />
        <Route path="/add-pokemon" element={<CreatePokemon />} />
        <Route path="/pokemons/:id/edit" element={<EditPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
