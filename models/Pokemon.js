import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pokemon = new Schema({
  name: { type: String, required: true },
  weight: { type: String },
  height: { type: String },
  abilities: { type: String }
});

export default mongoose.model("pokemons", Pokemon);
