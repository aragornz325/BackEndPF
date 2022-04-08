const express = require('express')
const habitacionesService = require('./../services/habitaciones.services')
const validatorHandler = require('../middleware/validator.handler')
const { crearHabitacionSchema, actualizarHabitacionSchema, getHabitacionSchema} = require('../schemas/habitaciones.schema')
const router = express.Router()
const services = new habitacionesService

router.get('/', async (req, res)=>{
  const habitaciones = await services.buscar();
  res.json(habitaciones)

  });

router.get('/filter', (req, res)=>{
      res.json('soy el filtro')

  });

router.get('/:id',
validatorHandler(getHabitacionSchema, 'params'),
async (req, res)=>{
  try {
    const {id} = req.params;
    const habitacion = await services.buscaruno(id);
    res.json(habitacion)
  } catch(error) {
    res.status(404).json({
      message: error
    })
  }

  });

router.post('/',
validatorHandler(crearHabitacionSchema, 'body'),
async (req, res)=>{
try {
  const body = req.body
  console.log('este es el body de crear---->', body)
  const nuevaHabitacion = await services.crear(body)
  res.status(201).json(nuevaHabitacion)
} catch(error) {
  res.status(error)
}
});

router.patch('/:id',
validatorHandler(getHabitacionSchema, 'params'),
validatorHandler(actualizarHabitacionSchema, 'body'),
async (req, res)=>{
  try {
    const { id } = req.params
    const idparse = parseInt(id, 10)
    const body = req.body
    console.log('actualizando--->', body, id) 
    const habitacion = await services.actualizar(idparse,body)
    res.json(habitacion)
  } catch(error) {
    res.status(404).json({
      message: error
    })
  }
  });

  router.delete('/:id', async (req, res)=>{
    try {
      const { id } = req.params
    const idparse = parseInt(id, 10)
    const habitacion = await services.borrar(id)
    res.json({
      message: habitacion
    })
    } catch(error) {
      res.status(404).json({
        message: error
      })
    }
    });


//   router.get('/:habitacionesId/camas/:camasId', (req, res)=> {
//   const {camasId} = req.params;
//   const {habitacionesId} = req.params;
// })

module.exports = router
