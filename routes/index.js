var express = require('express');
var router = express.Router();
const RegisterController = require('../controllers/auth/registerController');
/* GET home page. */
router.get('/', (req,res,next) => {
  res.render('index');
});

/* ROUTER PARA LLAMAR A LA VISTA REGISTER...Cuando ponga en el navegador localhost:3000/register, cargara la vista register y pondra de titulo de la pagina Registro*/
router.get('/register', (req, res, next) => {
  let registerController = new RegisterController(req, res, next);
  registerController.index();
});
/* ROUTER PARA PERMITIR AL USUARIO REALIZAR EL ENVIO DE INFORMACION EN EL FORMULARIO DEL REGISTER*/
router.post('/register', (req, res, next) => {
  let registerController = new RegisterController(req, res, next);
  registerController.register();
});
module.exports = router;
