// Importamos la base de datos
import db from '../database/dbNomina.js'

// Importamos sequelize
import {DataTypes, Sequelize, TIME} from 'sequelize'

// Realizando el modelo del regsitro
const RegistroModel = db.define('registros', {
    registro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    clave: {
        type: Sequelize.STRING(6)
    }, 
    nombre: {
        type: Sequelize.STRING(120)
    },
    fecha: {
        type: Sequelize.DATEONLY
    },
    hora: {
        type: Sequelize.TIME
    },
    procesado: {
        type: Sequelize.TINYINT
    }

}, {
    freezeTableName: true,
    timestamps: false
})

// Exportando el modelo ya realizado
export default RegistroModel
