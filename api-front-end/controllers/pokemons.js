import Pokemon from "../models/Pokemon.js";

export const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(cats);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getPokemon = async (req, res) => {
  try {
    const { id } = req.params;

    const pokemon = await Pokemon.findById(id);
    res.json(pokemon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json(cat);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updatePokemon = async (req, res) => {
  const { id } = req.params;
  const pokemon = await Pokemon.findByIdAndUpdate(id, req.body);
  res.status(200).json(pokemon);
};

export const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pokemon.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Pokemon Deleted!");
    }

    throw new Error("Pokemon not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
