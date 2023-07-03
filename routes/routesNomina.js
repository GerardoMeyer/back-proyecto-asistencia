// Importando express
import express from "express";
import { getNomina, getNominaRange } from "../controllers/NominaController.js";

// Enrutador
const routerNomina = express.Router()

// Metodos asociados ya al enrutador
routerNomina.get('/', getNomina)
routerNomina.get('/:fechaInicial/:fechaFinal', getNominaRange)

// Exportando todo el router
export default routerNomina
