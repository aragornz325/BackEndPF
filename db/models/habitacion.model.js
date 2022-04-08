const {Model, DataTypes, Sequelize} = require('sequelize')

const HABITACION_TABLE = 'habitaciones';

const HabitacionSchema = {
  id: {
    allownull: false,
    primaryKey: true,
    type: DataTypes.UUID,     
    defaultValue: DataTypes.UUIDV4,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cantCamas:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'cant_camas',
  },
  comodidades:{
    type: DataTypes.STRING,
  },
  tipoHabitacion:{
    type: DataTypes.STRING,
    field: ' tipo_habitacion',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Habitacion extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HABITACION_TABLE,
      modelName: 'Habitacion',
      timestamps: false
    }
  }
}


module.exports = { HABITACION_TABLE, HabitacionSchema, Habitacion }
