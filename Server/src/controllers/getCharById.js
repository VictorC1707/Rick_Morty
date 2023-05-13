const axios = require("axios")

function getCharById(res,id) {
    axios(`https://rickandmortyapi.com/api/character/:id`)
    .then((response) => response.json())
    .then(data => {let obj = {id:data.id, name:data.name, gender:data.gender,species:data.species, origin:data.origin,image:data.image,status:data.status}
     res.status(200).json(obj)
    }).catch(err => res.status(500).send(err))

    
}