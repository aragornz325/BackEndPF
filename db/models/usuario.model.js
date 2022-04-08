const {Model, DataTypes, Sequelize} = require('sequelize')

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {

  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
  
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    field: 'fecha_nacimiento',
    allowNull: false,
  },
  Telefono:{
    type: DataTypes.INTEGER,
  },
  NombreUsuario:{
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoUsuario: {
    type: DataTypes.ENUM('admin', 'cliente'),
    allowNull: false,
    field: 'tipo_usuario',
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
