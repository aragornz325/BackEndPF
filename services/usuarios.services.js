const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres'); para trabajar por pooling
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    const nuevoUsuario = await models.Usuario.create(data)
    return nuevoUsuario;
  }

  async find() {
    const rta = await models.Usuario.findAll();
    //const rta = await client.query('SELECT * FROM roles'); consulta con sql-node
    //return rta.rows;
    return rta
  }

  async findOne(id) {
    const usuario = await models.usuario.findByPk(id);
    if (!usuario) {
      throw boom.notFound('el usuario solicitado no existe')
    }
    return usuario;
  }

  async update(id, changes) {
    const usuario = await this.findOne(id)
    const respuesta = await usuario.update(changes);
    return {
      respuesta
    };
  }

  async delete(id) {
    const usuario = await this.findOne(id)
    await usuario.destroy();
    return { id };
  }
}

module.exports = UserService;
