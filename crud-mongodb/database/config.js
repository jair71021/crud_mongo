const mongoose = require("mongoose");

const dbconexion= async() => {

    try{
        
        await mongoose.connect(process.env.MONGOURI);
        console.log("Base de datosconectada");
    } catch(error){

        console.log(error);
        throw new Error('Erro en la coneccion a la Base de Datos');

    }

}

module.exports = dbconexion;