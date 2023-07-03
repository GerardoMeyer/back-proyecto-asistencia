// Importando express
import express from "express";
// Importando cors
import cors from 'cors';
// Importamos la conexion a la BD
import db from "./database/db.js";
// Importando BD de empleados
import dbEmpleados from "./database/dbEmpleado.js";
// Importando BD de Nomina
import dbNomina from "./database/dbNomina.js";
// Importamos nuestro enrutador
import router from './routes/routes.js';
import routerEmpleados from './routes/routesEmpleados.js';
import routerNomina from "./routes/routesNomina.js";
import "dotenv/config";


// Variable de express
const app = express()


// Utilización de cors
app.use(cors());


// Utilizando los enrutadores para las APIS
app.use(express.json())
app.use('/registros', router)
app.use('/empleados', routerEmpleados)
app.use('/nomina', routerNomina)


// Probando la conexion a la base de datos de registros de asistencia
try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD de registros')
} catch (error) {
    console.log(`Error de conexion es: ${error}`)
}

// Probando la conexion a la base de datos de empleados
try {
    await dbEmpleados.authenticate()
    console.log('Conexion exitosa a la BD de empleados')
} catch (error) {
    console.log(`Error de conexion con la BD de empleados es: ${error}`)
}

// Probando la conexion a la base de datos de la nómina
try {
    await dbNomina.authenticate()
    console.log('Conexion exitosa a la BD de nomina')
} catch (error) {
    console.log(`Error de conexion con la BD de nomina es: ${error}`)
}

const PORT = process.env.PORT; 

// Corriendo el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


// Rutas para generar el registro
app.post('/', (req, res) => { // Variables, que pasan despues como registro
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password


    // Haciendo la insercion a la base de datos
    db.query("INSERT INTO registros (name, email, password) VALUES (?,?,?)", [
        name, email, password
    ], (error) => {
        res.send({error: error})
    })
})

// Rutas para validar el Login
// app.get('/:email/:password', (req, res) => {
//     const {email, password} = req.body

//     // Haciendo la busqueda en la base de datos
//     db.query("SELECT * FROM registros WHERE email = ? AND password = ?", [
//         email, password
//     ], (error, result) => { // Si encuentra un error
//         if (error) {
//             res.send({error: error})
//         }

//         // Si encuentra un registro
//         if (result.length > 0) {
//             res.send(result)
//         } else {
//             res.send({message: "El usuario y/o clave son incorrectas"})
//         }

//     })
// })
