const express = require('express');
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')

const app = express();
const port = 3005;

app.use(express.json())

app.get('/', (req, res)=>{

    res.json('levantando server PF')

});

app.get('/home', (req, res)=>{

  res.json({
    name: 'soy el home'
  })

});

app.get('/nueva-ruta', (req, res)=>{

    res.send('hola, soy el nuevo endpoint')

});



routerApi(app);

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);






app.listen(port, ()=>{
    console.log('preparado para trabajar en el puerto ' + port)
})
