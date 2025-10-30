//fs file sistem
const fs = require('node:fs') // se usa los : a partir de node 16

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //Si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // Si es un enlace Simbólico
    stats.size, // Tamaño en bytes

)