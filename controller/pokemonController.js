const fs = require("fs");

//----- Data --------
const pokemonData = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/pokemon.json`)
);

//--------- Middleware ----------

// Get all pokemons
exports.getAllPokemon = (req, res) => {
	res.status(200).json({
		status: "sucess",
		results: pokemonData.length,
		pokemonData,
	});
};

// Get a Pokemon by name
exports.getPokemonByName = (req, res) => {
	const name = req.params.name;
	const pokemon = pokemonData.find((pokemon) => pokemon.name === name);

	res.status(200).json({
		status: "sucess",
		pokemonData,
	});
};
