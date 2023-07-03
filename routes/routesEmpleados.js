// Importando express
import express from "express";
import {
    createEmpleado,
    deleteEmpleado,
    getAllEmpleados,
    getEmpleado,
    updateEmpleado
} from "../controllers/EmpleadoController.js";

// Enrutador
const routerEmpleados = express.Router()

// Metodos asociados ya al enrutador
routerEmpleados.get('/', getAllEmpleados)
routerEmpleados.get('/:clave', getEmpleado)
routerEmpleados.post('/', createEmpleado)
routerEmpleados.put('/:clave', updateEmpleado)
routerEmpleados.delete('/:clave', deleteEmpleado)

// Exportando todo el router
export default routerEmpleados
