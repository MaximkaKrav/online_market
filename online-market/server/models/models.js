const sequalize = require('./db')
const {DataTypes} = require('sequelize')


const User = sequalize.define('user',{
    id: {type : DataTypes.INTEGER,primaryKey : true, autoIncrement: true},
    email: {type : DataTypes.STRING,unique: true},
})