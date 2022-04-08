const {Model, DataTypes, Sequelize} = require('sequelize')

const RESERVACAMA_TABLE = 'reservas';

const ReservaCamaSchema = {
  id: {
    type: DataTypes.UUID,     
    defaultValue: DataTypes.UUIDV4,
    allownull: false,
    primaryKey: true,
  },
  fechaReserva: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_reserva',
  },
  CheckIn:{
    type: DataTypes.DATE,
    allowNull: false,
    field: 'check_in',
  },
  CheckOut:{
    type: DataTypes.DATE,
    allowNull: false,
    field: 'check_out',
  },
  estado:{
    type: DataTypes.ENUM('reservada', 'cancelada', 'ocupada'),
    allowNull: false,  
  },
}

class ReservaCama extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVACAMA_TABLE,
      modelName: 'Reserva',
      timestamps: false
    }
  }
}


module.exports = { RESERVACAMA_TABLE, ReservaCamaSchema, ReservaCama }