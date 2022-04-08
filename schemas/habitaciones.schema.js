const joi = require('joi')

const id = joi.string();
const name = joi.string().alphanum().min(3).max(15);
const price = joi.number().integer().min(150);

const crearHabitacionSchema = joi.object({
  name: name.required(),
  price: price.required(),
});

const actualizarHabitacionSchema = joi.object({
  name: name,
  price: price,
});

const getHabitacionSchema = joi.object({
  id: id.required(),
});

module.exports = {
  crearHabitacionSchema,
  actualizarHabitacionSchema,
  getHabitacionSchema
}
