const axios = require('axios')

const url = 'https://spapi.dev/api/episodes'

async function obtenerSouthPark(){
    try{
        const respuesta = await axios.get(url);


        let episodio = respuesta.data.data

        const episodios = episodio.map(episodio => ({
            nombre: episodio.name,
            temporada: episodio.season
        }));

        console.log("South Park")
        console.log(episodios);

    }catch(error){
        console.error('Error al obtener datos:', error);
    }
}

obtenerSouthPark()