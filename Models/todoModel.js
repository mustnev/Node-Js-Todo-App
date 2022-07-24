const mongoose = require('mongoose')

const Schema = mongoose.Schema

let todoSchema = new Schema({
    todoKonu:{type:String,required:true},
    todoAciklama:{type:String,required:true},
    todoOncelik:{type:String,required:true},
    todoBitis:{type:String,required:true},
},{collection:'todoApp'})

let todoModel = mongoose.model('todoApp',todoSchema)

module.exports = todoModel