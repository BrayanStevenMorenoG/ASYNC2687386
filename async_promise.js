const needle = require('needle')
const axios = require('axios')

const url = 'https://pokeapi.co/api/v2/pokemon'

needle('get',
        url,
        {json: true})
        .then((respuesta) => {
            let pokemones = respuesta.data.results
            pokemones.forEach((pokemon) => {
                console.log(pokemon.Name)
                console.log('----------')
            });
        }) 
        .catch(function(error){
            console.log(error)
        })