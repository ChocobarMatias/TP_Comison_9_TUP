const express = require('express');
const router = express.Router();
const {mostrarUsuarios, UsuarioXId, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuario.Controller');

router.get("/usuarios/",mostrarUsuarios);
router.get("/usuario/:id", UsuarioXId);
router.post("/usuario/crear/", crearUsuario);
router.put("/usuario/actualizar/:id", actualizarUsuario);
router.delete("/usuario/eliminar/:id", eliminarUsuario);

module.exports = router;