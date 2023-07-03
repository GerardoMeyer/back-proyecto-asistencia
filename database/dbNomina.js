// Importando Sequelize
import {Sequelize} from "sequelize";

// Declarando la variable para la conexión con la BD
const dbNomina = new Sequelize('nomina_sypris', 'usuario2', 'usuario2', {
    host: '172.27.98.46', 
    dialect: 'mysql'
})


// Exportando la base de datos
export default dbNomina