const os = require ('node:os');

console.log ('Información del sistema operativo');
console.log ('----------------------------------');


console.log ('Nombre del sistema operativo:', os.platform());
console.log ('Versión del sistema operativo:', os.release());
console.log ('Arquitectura del sistema operativo:', os.arch());
console.log ('Cantidad de CPUs:', os.cpus()); // poder escalar proecesos en Node
console.log ('Memoria total (bytes):', os.totalmem() / 1024 / 1024);
console.log ('Memoria libre (bytes):', os.freemem() / 1024 / 1024);
console.log ('tiempo activo', os.uptime()/ 60 / 60, 'minutos, horas');
