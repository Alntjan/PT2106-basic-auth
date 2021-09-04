const axios = require('axios');
const router = require('express').Router();

/* GET home page */
// https://www.boredapi.com/api/activity/

router.get('/bored-pokemon/:pokemonId', (req, res, next) => {
  const { pokemonId: id } = req.params;
  let pokemonData;
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((pokemonFromApi) => {
      // console.log(pokemonFromApi);
      pokemonData = pokemonFromApi.data;
      return axios.get('https://www.boredapi.com/api/activity/');
    })
    .then((activity) => {
      // console.log('this is a random activity:', activity);
      res.render('pokemon/bored-pokemon', {
        pokemon: pokemonData,
        activity: activity.data,
      });
    })
    .catch((err) => next(error));
});

module.exports = router;
