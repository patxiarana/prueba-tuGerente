import Sequelize from 'sequelize';



export const sequelize = new Sequelize(
'tugerente'
 , 'postgres',
 'software', {
host:'localhost',
dialect: 'postgres'
})