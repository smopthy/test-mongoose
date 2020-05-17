const mongoose = require('mongoose')
const Schema = mongoose.Schema //資料庫綱要 
const todoSchema = new Schema({
    name : {
        type : String ,
        required : true 
    }
})

module.exports = mongoose.model('Todo' , todoSchema ) // 輸出schema , 這份schema叫做 todo