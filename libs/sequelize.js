const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models/index')
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize);

const {Usuario, Habitacion, Huesped, Reserva, Cama} = sequelize.models;
console.log(sequelize.models)


// relacion habitacion-camas 1 a muchos muchos a 1
//  una habitacion tiene muchas camas
// una cama pertenece a una habitacion

Habitacion.hasMany(Cama, {
  foreignKey: 'id'
});
Cama.belongsTo(Habitacion);

// relacion usuario reserva  
// una reserva tiene un usuario
// un usuario puede tener muchas reservas

Usuario.hasMany(Reserva, {
  foreignKey: 'dni'
});
Reserva.belongsTo(Usuario);


// relacion Huesped reserva  
// una reserva tiene un Huesped
// un Huesped puede tener muchas reservas

Huesped.hasMany(Reserva, {
  foreignKey: 'dni'
});
Reserva.belongsTo(Huesped);

// relacion cama reserva  
// una cama puede tener varias reservas
// una reserva puede tener varias camas 
Cama.belongsToMany(Reserva, { through: 'Reserva-Cama' });
Reserva.belongsToMany(Cama, { through: 'Reserva-Cama' });


sequelize.sync({ force: true })
  .then(() => {
    console.log(`base de datos creada/actualizada`);
  })
  .catch(err => console.log(err));

module.exports = sequelize
