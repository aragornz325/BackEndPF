const express = require('express');

const UserService = require('../services/usuarios.services');
const validatorHandler = require('../middleware/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('../schemas/usuario.schema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.buscar();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:dni',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const dniparse = parseInt(dni,10)
      console.log(dniparse)
      const ususario = await service.buscaruno(dniparse);
      res.json(ususario);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.crear(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:dni',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      const body = req.body;
      const category = await service.actualizar(dni, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:dni',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { dni } = req.params;
      await service.borrar(dni);
      res.status(201).json({dni});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
