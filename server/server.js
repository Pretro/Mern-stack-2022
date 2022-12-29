import express from 'express';   /* 1.- importamos express  */

import mongoose from 'mongoose'; /* 6.- Importar mongoose */

import cors from 'cors'; /* 9.- importar cors */

/* 5.- creamos el constructor del servidor y le asignamos un puerto */
const PORT = 4000

const app = express();  /* 2.- Creamos el constructor */

app.use(cors); /* 10.- usamos cors */

/* 7.- conectar con la base de datos mongodb */
await mongoose.connect("mongodb+srv://Shigge:shigge123@cluster0.hb0olgd.mongodb.net/?retryWrites=true&w=majority")

/* 8.- Si esta todo bien conectado se muestra el siguiente mensaje, de lo contrario mostrara un error */
console.log("MongoDB connection is successful");

app.get('/', (req, res) => {    /* 3.- creamos dos argumentos req y res y mandamos un texto "Hello World!" */
    res.send ("Hello World!");
})

/* 4.- Iniciamos el servidor y le asignamos un puerto */
app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
});