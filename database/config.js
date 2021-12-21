const mongoose = require('mongoose');


const dbConnection = async()=> {
    try{
        console.log('init db js')

    }catch(error){

        consol.log('error')

        throw new Error('Erro en la base datos ')

    }
}

module.exports = {
    dbConnection
}