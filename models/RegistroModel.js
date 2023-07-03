// Importamos la base de datos
import db from '../database/db.js'

// Importamos sequelize
import {DataTypes, Sequelize} from 'sequelize'

// Realizando el modelo del regsitro
const RegistroModel = db.define('registrosasistencia', {
    name: {
        type: Sequelize.STRING(100)
    },
    email: {
        type: Sequelize.STRING(100)
    },
    password: {
        type: Sequelize.STRING(100)
    }
}, {
    freezeTableName: true,
    timestamps: false
})

// Exportando el modelo ya realizado
export default RegistroModel
