import { Router } from "express";
import pokemonsRoutes from "./pokemons.js";

const router = Router();

router.get("/", (req, res) => res.send("Sure why  not"));

router.use("/pokemons", pokemonsRoutes);

export default router;
