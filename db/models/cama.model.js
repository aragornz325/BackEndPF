const {Model, DataTypes, Sequelize} = require('sequelize')

const CAMA_TABLE = 'camas';

const CamaSchema = {
  id:{
    type:DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  checkIn:{
    type: DataTypes.DATEONLY,
    defaultValue: null,
  },
  checkOut:{
    type: DataTypes.DATEONLY,
    defaultValue: null,
  },
  FechaReserva:{
    type: DataTypes.DATEONLY,
    defaultValue: null,
  },
  EstadoReserva:{
    type: DataTypes.ENUM('reservada', 'cancelada', 'ocupada'),
    allowNull: false,
    defaultValue: 'reservada',
  }
}

class Cama extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CAMA_TABLE,
      modelName: 'Cama',
      timestamps: false
    }
  }
}


module.exports = { CAMA_TABLE, CamaSchema, Cama }
