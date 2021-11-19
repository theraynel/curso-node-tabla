
const fs = require('fs');
//require('../config/yargs');

const crearArchivos = async ( base = 5, listar = false, hasta = 10 ) => {


    let salida = '';
    // return new Promise((resolve, rejects) =>{
      
      try {
        //let nombreArchivo = '';
        
        for (let index = 1; index <= hasta; index++) {              
            salida += `${base} x ${index} = ${base * index} \n`;
        }
        
        if(listar){
            console.log('=================================');
            console.log('           Tabla del:',base);
            console.log('=================================');

            console.log(salida);
        }

         fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
         /// para el caso de que no sea async
        // fs.writeFile(`tabla-${base}.txt`,salida, (err) =>{
        //     if(err) throw err;
        //      nombreArchivo +=  `tabla-${base}.txt creada!`;

        //      nombreArchivo ? resolve(nombreArchivo) : rejects(`Ha ocurrido un error al crear la tabla del ${base}`);
        return `tabla-${base}.txt creada!`;
        // });
      } catch (error) {
          throw error;
      }
   
  //  })
}

module.exports = {
    crearArchivos
}