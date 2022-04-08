const {Model, DataTypes, Sequelize} = require('sequelize')

const HUESPED_TABLE = 'huespedes';

const HuespedSchema = {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  fechaNacimiento: {
    type: DataTypes.STRING,
    field: 'fecha_nacimiento',
  },
  nacionalidad: {
    type: DataTypes.STRING,
  },


}

class Huesped extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HUESPED_TABLE,
      modelName: 'Huesped',
      timestamps: false
    }
  }
}


module.exports = { HUESPED_TABLE, HuespedSchema, Huesped }
