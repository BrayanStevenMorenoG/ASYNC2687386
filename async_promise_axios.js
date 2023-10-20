const axios = require('axios')

const url = 'https://pokeapi.co/api/v2/pokemon'

axios.get(url)
                .then((respuesta) => {
                    let pokemones = respuesta.data.respuesta
                    pokemones.forEach((pokemon))
                        console.log(pokemon.name)
                        console.log('----------')
                })
                .catch(function(error){
                    console.log(error)
                })