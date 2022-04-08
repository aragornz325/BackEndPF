const boom = require('@hapi/boom');
const { Habitacion } = require('../db/models/habitacion.model');
const sequelize = require('../libs/sequelize')
const { models } = require('./../libs/sequelize')


class habitacionesService {
    constructor() {
      this.habitaciones = [];
      this.generar();

    }

  generar() {

  }

  async crear(data) {
    const nuevaHabitacion = await models.Habitacion.create(data)
    return nuevaHabitacion;
  }

  async buscar() {
    const rta = await models.Habitacion.findAll();
    return rta
  }

  async buscaruno(id) {
    const habiacion = await models.Habitacion.findByPk(id, );
    if (!habiacion) {
      throw boom.notFound('no existe la habitacion');
    }
    return habiacion;
  }

  async actualizar(id, cambios) {
    const habitacion = await this.findOne(id);
    console.log(habitacion)
    const rta = await habitacion.update(cambios);
    return rta;

  }

  async borrar(id) {
    console.log(id)
    const habitacion = await models.Habitacion.findOne(id);
    console.log(habitacion)
    await habitacion.destroy();
    return { id };

  }

}

module.exports = habitacionesService
