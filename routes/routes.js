// Importando express
import express from "express";
import {
    createRegistro,
    deleteRegistro,
    getAllRegistros,
    getRegistro,
    getRegistroEmail,
    updateRegistro
} from "../controllers/RegistroController.js";

// Enrutador
const router = express.Router()

// Metodos asociados ya al enrutador]
router.get('/', getAllRegistros)
router.get('/:email/:password', getRegistro)
router.get('/:email', getRegistroEmail)
router.post('/', createRegistro)
router.put('/:email', updateRegistro)
router.delete('/:email', deleteRegistro)

// Exportando todo el router
export default router
