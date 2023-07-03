// Importamos el modelo
import { Sequelize } from "sequelize";
import RegistroModel from "../models/NominaModel.js";


// Mostrar Registros con la fecha actual
export const getNomina = async (req, res) => { // Buscando un registro por email
    try {
        // Encuentra todos los registros 
        const registros = await RegistroModel.findAll({
            // Aquellos que sean de la fecha de hoy
            where: {
                fecha: new Date(),
            },
            // Los ordena por hora de la más tarde a la más temprana
            order: [
                ['hora', 'DESC']
            ]
        })
        // Manda la respuesta en JSON
        res.json(registros)
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar Registros con la fecha inicial dada y la fecha final dada
export const getNominaRange = async (req, res) => { 
    // Tomando las variables a partir de lo introducido en la API de los valores dinámicos 
    const fechaInicial = req.params.fechaInicial; 
    const fechaFinal = req.params.fechaFinal


    try {
        // Esperar respuesta por parte del modelo
        const resultados = await RegistroModel.findAll({
        // Encontrará a los empleados que cumplan con las siguientes condiciones
        where: {
            fecha: {    
            [Sequelize.Op.between]: [fechaInicial, fechaFinal]
            } 
        },
        // Ordenará a los empleados por nombre, fecha y hora
        order: [
            ['nombre', 'ASC'],
            ['fecha', 'DESC'],
            ['hora', 'DESC'],
        ]
        });

        // Mandará la respuesta en formato JSON
        res.json(resultados);
    } catch (error) {
        console.error('Error al consultar datos:', error);
        res.status(500).json({ error: 'Error al consultar datos' });
    }
}

