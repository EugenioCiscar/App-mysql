const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');
const UsersModels = require('../../models/usersModels');

class registerController extends Controller {
    constructor (req, res, next) {
        super(req, res, next)
    }
    /* Con este index, cargamos la vista register*/
    index() {
        this.res.render('register', {title: "Página de registro"});
    }
    /* Creamos API para el registro*/
    register(){
        let pass = this.req.body.pass;
        let passEnc = EncryptService.encryptPass(pass);
        console.log("password ->" + pass, "Encryptado ->" + passEnc);
    }

}

module.exports = registerController;