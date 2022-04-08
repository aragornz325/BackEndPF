const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres'); para trabajar por pooling
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.Usuario.findAll();
    //const rta = await client.query('SELECT * FROM roles'); consulta con sql-node
    //return rta.rows;
    return rta
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
