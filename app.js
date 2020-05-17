const express = require('express')
const mongoose = require('mongoose') 

const app = express()

mongoose.connect('mongodb://localhost/tood-list' ,  { useNewUrlParser: true , useUnifiedTopology: true })

const db = mongoose.connection

db.on('error',()=>{
    console.log('monogofb error' )
})

db.once('open' , ()=>{
    console.log ('mongodb connected')
})

app.get('/' , (req , res) => {
    res.send('it work ')
})


app.listen(3000 , ()=>{
    console.log('ready go ')
})