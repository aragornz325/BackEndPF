const {Model, DataTypes, Sequelize} = require('sequelize')

const HUESPED_TABLE = 'huespedes';

const HuespedSchema = {
  dni:{
    type:DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
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
  nacionalidad: {
    type: DataTypes.STRING,
  },
  Telefono:{
    type: DataTypes.INTEGER,
  },
  email:{
    type: DataTypes.INTEGER,
    validate: {
      isEmail: true,
    },
    unique: true
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
