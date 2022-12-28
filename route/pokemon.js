const express = require("express");
const pokemonController = require("../controller/pokemonController");

const router = express.Router();

//Get all Pokemon
router.get("/pokemon", pokemonController.getAllPokemon);

//Get Pokemon by name
router.get("/pokemon/:name", pokemonController.getPokemonByName);

module.exports = router;
