const {response} = require('express');
const{validationResult}= require('express-validator');
const crearEmail = (req, res= response) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(400).json({ok:false,
            message: errores.mapped()})
    }

    res.json({ ok:true,msg:'EmailCreado!!'});
}

module.exports={crearEmail}