const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { terremotoGet, terremotoPost, terremotoPut, terremotoDelete } = require('../controllers/terremoto')

route.get('/', terremotoGet)

route.post('/', terremotoPost)

route.put('/', terremotoPut)

route.delete('/', terremotoDelete)

module.exports = route