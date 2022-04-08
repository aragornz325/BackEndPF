const {Model, DataTypes, Sequelize} = require('sequelize')

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dni: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}


module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario }
