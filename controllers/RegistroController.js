// Importamos el modelo
import RegistroModel from "../models/RegistroModel.js";

// Mostrar todos los registros
export const getAllRegistros = async (req, res) => { // Buscar registros, y manejando errores si no lo hace
    try {
        const registros = await RegistroModel.findAll()
        res.json(registros)
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar un solo registro
export const getRegistro = async (req, res) => { // Buscando un registro por email
    const {email} = req.params 
    const {password} = req.params
    try {
        const registro = await RegistroModel.findAll({
            where: {
                email: email,
                password: password
            }
        })
        res.json(registro[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar un solo registro
export const getRegistroEmail = async (req, res) => { // Buscando un registro por email
    const {email} = req.params 
    try {
        const registro = await RegistroModel.findAll({
            where: {
                email: email,
            }
        })
        res.json(registro[0])
    } catch (error) {
        res.json({message: error.message})
    }
}


// Crear un registro
export const createRegistro = async (req, res) => { // Creando un registro
    try {
        await RegistroModel.create(req.body)
        res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}


// Actualizar un registro
export const updateRegistro = async (req, res) => { // Actualizando un registro por email
    try {
        await RegistroModel.update(req.body, {
            where: {
                email: req.params.email
            }
        })
        res.json({"message": "Registro actualizado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

// Eliminar un registro
export const deleteRegistro = async (req, res) => { // Borrando un registro
    try {
        await RegistroModel.destroy({
            where: {
                email: req.params.email
            }
        })
        res.json({"message": "Registro eliminado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}
