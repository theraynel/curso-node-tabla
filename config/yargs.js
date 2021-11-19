
const argv = require('yargs')
    .option('b', {
          alias: 'base',
          type : 'number',
          demandOption : true
    })
    .option('r', {
        alias: 'hasta',
        type : 'number',
        default : 10
    })
    .option('l', {
          alias : 'listar',
          type: 'boolean',
          default : false
    })
    .check( (argv,option) =>{
         if( isNaN(argv.b) ){
           throw 'La base tiene que ser un numero'
         }
           return true;
    })
    .argv;
    
    module.exports = argv;