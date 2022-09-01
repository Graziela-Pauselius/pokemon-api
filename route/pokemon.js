const express = require("express");
const pokemonController = require("../controller/pokemonController");

const router = express.Router();

router.get("/pokemon", pokemonController.getAllPokemon);

router.get("/pokemon/:name", pokemonController.getPokemonByName);

module.exports = router;
