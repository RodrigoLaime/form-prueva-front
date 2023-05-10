const path = require('path');

const express = require('express')
const app = express()
const ubicacionHTML = path.resolve(__dirname, './src/index.html');

app.get('/', (req, res) => {
  res.sendFile(ubicacionHTML)
})

app.listen(3000, () => {
  console.log('El formulario está corriendo en el puerto 3000')
})