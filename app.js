
const { crearArchivos } = require('./helpers/Multuplicacion');
const argv = require('./config/yargs');


console.clear();

 crearArchivos(argv.b, argv.l,argv.r)
  .then(nombreArchivo => console.log(nombreArchivo, 'Creado!'))
  .catch(err => console.log(err))