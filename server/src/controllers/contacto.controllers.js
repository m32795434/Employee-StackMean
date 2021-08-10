const contactoCtrl = {}
const Fcontacto = require('../models/Fcontacto')

contactoCtrl.createContacto = async (req, res)=> {
    const newContacto = new Fcontacto(req.body)
    await newContacto.save()
    res.send("Contacto enviado");
} 
contactoCtrl.getContactos = async (req, res)=> {
    const contactos =  await Fcontacto.find()
    res.json(contactos)
}

module.exports = contactoCtrl;