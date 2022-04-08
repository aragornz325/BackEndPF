const {Model, DataTypes, Sequelize} = require('sequelize')

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {
  id: {
    allownull: false,
    primaryKey: true,        /*se puede cambiar pero siempre al crear hay que mandar el dni*/
    type: DataTypes.UUID,     /* ver el tema del DNI... no se si esta bien que sea el ID*/
    defaultValue: DataTypes.UUIDV4,  
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
  tipoUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
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
