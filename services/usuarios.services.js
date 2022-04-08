const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres'); para trabajar por pooling
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {}

  async crear(data) {
    const nuevoUsuario = await models.Usuario.create(data)
    return nuevoUsuario;
  }

  async buscar() {
    const rta = await models.Usuario.findAll();
    //const rta = await client.query('SELECT * FROM roles'); consulta con sql-node
    //return rta.rows;
    return rta
  }

  async buscaruno(dni) {
    console.log('esto es dni en buscaruno ------->', dni)
    const usuario = await models.usuario.findByPk(dni);
    if (!usuario) {
      throw boom.notFound('el usuario solicitado no existe')
    }
    return usuario;
  }

  async actualizar(dni, changes) {
    const usuario = await this.findOne(dni)
    const respuesta = await usuario.update(changes);
    return {
      respuesta
    };
  }

  async borrar(dni) {
    const usuario = await this.findOne(dni)
    await usuario.destroy();
    return { dni };
  }
}

module.exports = UserService;
