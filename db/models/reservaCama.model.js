const {Model, DataTypes, Sequelize} = require('sequelize')

const RESERVACAMA_TABLE = 'reservas';

const ReservaCamaSchema = {
  id: {
    allownull: false,
    primaryKey: true,
    type: DataTypes.UUID,     
    defaultValue: DataTypes.UUIDV4,
  },
  fechaReserva: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_reserva',
  },
  CheckIn:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'check_in',
  },
  CheckOut:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'check_out',
  },
  estado:{
    allowNull: false,  
    type: DataTypes.STRING,
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
      modelName: 'reserva_cama',
      timestamps: false
    }
  }
}


module.exports = { RESERVACAMA_TABLE, ReservaCamaSchema, ReservaCama }