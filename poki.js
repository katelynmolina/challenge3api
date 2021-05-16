// i want you to print a random pokemon

//hint: use the pokemon api: pokeapi.co

// GET request to 'https://pokeapi.co/api/v2/pokemon/1'
// Returns some JSON
// Use the json date to print pokemon

const axios = require('axios');
const sendGetRequest = async () => {
    try {
const getPokemonData = async (num) => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const data = res.data.name;
    const id = res.data.id;
    console.log(id, data);
   };
   
   for(let i=1; i <= 150; i++){
    getPokemonData(i);
   };