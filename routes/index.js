const habitacionesRouter = require('./habitaciones.route')
const camasRouter = require('./camas.router')
const usuariosRouter = require('./usuarios.router')


function routerApi (app) {
  app.use('/habitaciones', habitacionesRouter );
  app.use('/camas', camasRouter );
  app.use('/usuarios', usuariosRouter );

}

module.exports = routerApi;
