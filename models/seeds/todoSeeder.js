const mongoose = require('mongoose')
const Todo = require('../todo')
mongoose.connect('mongodb://localhost/todo-list',{ useNewUrlParser: true , useUnifiedTopology: true })

const db = mongoose.connection

db.on('error' , ()=>{
    console.log ('mongodb connected')
})

db.once('open', () => {
    console.log('mongodb connected!')
    for (let i = 0; i < 1; i++) {
      Todo.create({ name: 'name-' + i })
    }
    console.log('done')
  })
