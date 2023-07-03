// Importamos la base de datos
import db from '../database/dbEmpleado.js'

// Importamos sequelize
import {DataTypes, Sequelize, TIME} from 'sequelize'

// Realizando el modelo del regsitro
const RegistroModel = db.define('empleados', {
    clave: {
        type: DataTypes.STRING(6),
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING(60)
    }


}, {
    freezeTableName: true,
    timestamps: false
})

// Exportando el modelo ya realizado
export default RegistroModel
