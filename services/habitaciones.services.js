const Chance = require('chance');
const boom = require('@hapi/boom')
var chance = new Chance

const sequelize = require('../libs/sequelize')


class habitacionesService {
    constructor() {
      this.habitaciones = [];
      this.generar();

    }

  generar() {

  for (let i = 0; i < 12; i++) {
     this.habitaciones.push({
        id: chance.integer({ min: 1, max: 100000 }),
        name:chance.animal({type: 'farm'}),
        price: chance.dollar({min: 125, max: 250}),

      })
  }
  }

  async crear(data) {

    const nuevaHabitacion = {
      id: chance.integer({ min: 1, max: 100 }),
      ...data
    }
    this.habitaciones.push(nuevaHabitacion);
    return nuevaHabitacion

  }

  async buscar() {
    const query = 'SELECT * FROM roles'
    const [data] = await sequelize.query(query);
    return data;
  }

  async buscaruno(id) {
    const habitacion = this.habitaciones.find(item => item.id == id);
    if (!habitacion) {
      throw boom.notFound('no se encontro la habitacion')
    }
    return habitacion;

  }

  async actualizar(id, cambios) {
    const index = this.habitaciones.findIndex(item => item.id === id)

    console.log(index)
    if(index === -1) {
      throw boom.notFound('habitacion no encontrada');
    }else {
    const habitacion = this.habitaciones[index];
    this.habitaciones[index] = {
      ... habitacion,
      ... cambios,
    }
    return this.habitaciones[index];}

  }

  async borrar(id) {
    const index = this.habitaciones.findIndex(item => item.id === id)
    if(index === -1) {
      throw boom.notFound('habitacion no encontrada');
    }
    this.habitaciones.splice(index, 1);
    return `se elimino la habitacion ${id}`;

  }

}

module.exports = habitacionesService
