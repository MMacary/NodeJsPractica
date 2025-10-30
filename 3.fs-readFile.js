const fs = require('node:fs')


console.log('Leyendo el primer  archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <--------- ejecuta este callbachk cuando termine de leer
console.log('Primer texto:', text)
})

console.log('-----------> Haciendo otra cosa mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8',(err, text) => { // <--------- ejecuta este callbachk cuando termine de leer)
console.log('Segundo Texto;', text)
})



