const express = require('express')
const mongoose = require('mongoose') 
const exphbs = require('express-handlebars')
const app = express()

mongoose.connect('mongodb://localhost/tood-list' ,  { useNewUrlParser: true , useUnifiedTopology: true })

const db = mongoose.connection
//載入 todo model 



const Todo = require('./models/todo')
//建立一個名為hbs的樣板引擎，並傳入expbs與相關參數 , extname => 設定副檔名
app.engine('hbs',exphbs({defaultLayout : 'main' , extname : '.hbs'}))

//啟動樣版引擎 hbs
app.set('view engine' , 'hbs')

// Todo 首頁 

app.get('/' , (req, res)=>{
    Todo.find() // 取出所有todo models 裡所有資料
      .lean()// 把mongoose 的model物件轉換成乾淨的js資料陣列
      .then(todos => res.render('index', {todos : todos} )) // 將資料傳給 index 樣版
      .catch(error => console.error(error)) // 錯勿處理
        

    // res.render('index')
        
})

db.on('error',()=>{
    console.log('monogodb error' )
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