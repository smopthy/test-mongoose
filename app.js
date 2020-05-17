const express = require('express')
const app = express()


app.get('/' , (req , res) => {
    res.send('it work ')
})


app.listen(3000 , ()=>{
    console.log('ready go ')
})