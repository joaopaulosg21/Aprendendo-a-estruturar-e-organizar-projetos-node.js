import sequelize from "../database.js"
import { DataTypes } from "sequelize"
import config from "../../config.js"

const User = sequelize.define(config.table,{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

export default User;