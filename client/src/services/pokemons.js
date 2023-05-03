import api from "./apiConfig.js";

export const getPokemons = async () => {
  try {
    const response = await api.get("/pokemons");
    return response.data;
  } catch (error) {
    console.error(`Failed to get things - error: ${error}`);
    throw error;
  }
};

export const getPokemon = async (id) => {
  try {
    const response = await api.get(`/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get thing - error: ${error}`);
    throw error;
  }
};

export const createPokemon = async (pokemonData) => {
  try {
    const response = await api.post("/pokemons", pokemonData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePokemon = async (id, pokemonData) => {
  try {
    const response = await api.put(`/pokemons/${id}`, pokemonData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePokemon = async (id) => {
  try {
    const response = await api.delete(`/pokemons/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
