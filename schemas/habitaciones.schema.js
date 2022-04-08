const joi = require('joi')

const id = joi.string();
const nombre = joi.string().min(3).max(15);
const precio = joi.number().integer().min(150);
const cantCamas = joi.number().integer();
const comodidades = joi.string();
const tipoHabitacion = joi.string();

const crearHabitacionSchema = joi.object({
  nombre: nombre.required(),
  cantCamas: cantCamas.required(),
  comodidades: comodidades.required(),
  tipoHabitacion: tipoHabitacion.required(),
});

const actualizarHabitacionSchema = joi.object({
  nombre: nombre,
  cantCamas: cantCamas,
  comodidades: comodidades,
  tipoHabitacion: tipoHabitacion,
});

const getHabitacionSchema = joi.object({
  id: id.required(),
});

module.exports = {
  crearHabitacionSchema,
  actualizarHabitacionSchema,
  getHabitacionSchema
}
