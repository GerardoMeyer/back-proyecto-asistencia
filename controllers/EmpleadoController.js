// Importamos el modelo
import RegistroModel from "../models/EmpleadoModel.js";

// Mostrar todos los registros
export const getAllEmpleados = async (req, res) => { // Buscar registros, y manejando errores si no lo hace
    try {
        const registros = await RegistroModel.findAll()
        console.log( 'Registros', registros)
        res.json(registros)
    } catch (error) {
        res.json({message: error.message})
    }
}


// Mostrar un solo registro
export const getEmpleado = async (req, res) => { // Buscando un registro por email
    try {
        const registro = await RegistroModel.findAll({
            where: {
                clave: req.params.clave
            }
        })
        res.json(registro[0])
    } catch (error) {
        res.json({message: error.message})
    }
}


// Crear un registro
export const createEmpleado = async (req, res) => { // Creando un registro
    try {
        await RegistroModel.create(req.body)
        res.json({"message": "Empleado creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}


// Actualizar un registro
export const updateEmpleado = async (req, res) => { // Actualizando un registro por email
    try {
        let {nombre} = req.body
        await RegistroModel.update( 
            {
                nombre: nombre
            },
            {
                where: {
                    clave: req.params.clave,
                }
            }
        )

        res.json({"message": "Registro actualizado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }

}

// Eliminar un registro
export const deleteEmpleado = async (req, res) => { // Borrando un registro
    try {
        await RegistroModel.destroy({
            where: {
                clave: req.params.clave
            }
        })
        res.json({"message": "Registro eliminado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}
