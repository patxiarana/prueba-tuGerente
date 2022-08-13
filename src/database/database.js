import Sequelize from 'sequelize';



export const sequelize = new Sequelize(
'tugerente'
 , 'postgres',
 'software', {
host:'postgres',
dialect: 'postgres'
})