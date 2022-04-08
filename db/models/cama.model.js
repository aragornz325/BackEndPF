const {Model, DataTypes, Sequelize} = require('sequelize')

const CAMA_TABLE = 'camas';

const CamaSchema = {
  id: {
    allownull: false,
    primaryKey: true,
    type: DataTypes.UUID,     
    defaultValue: DataTypes.UUIDV4,
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL(20, 2)
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
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
