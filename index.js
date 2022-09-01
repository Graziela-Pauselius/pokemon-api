const express = require("express");
const cors = require("cors");

const pokemonRouter = require("./route/pokemon");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

// ------------- Middlewares ----------
app.use(cors());
app.use(express.json());

//-------- Router -----------
app.use("/", pokemonRouter);

//---------- Port ----------
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});
