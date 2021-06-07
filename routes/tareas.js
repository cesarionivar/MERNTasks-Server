const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

/** api/tareas **/

// Crear una tarea
router.post(
  '/',
  auth,
  [
    check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('proyecto', 'El Proyecto es obligatorio').not().isEmpty(),
  ],
  tareasController.crearTarea
);

module.exports = router;
