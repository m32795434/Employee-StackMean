const {Router} = require('express');
const router = Router();

const contactoCtrl = require('../controllers/contacto.controllers.js')

router.post('/', contactoCtrl.createContacto);
router.get('/', contactoCtrl.getContactos);


module.exports = router;