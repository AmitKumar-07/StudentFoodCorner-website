// server page of our 
// require('dotenv').config()
const express=require('express') //express is function so we have to call it so that it give me all methods
const app=express() //app will get all methods of express
const ejs=require('ejs')
const expressLayout=require('express-ejs-layouts')
const path=require('path')

//port variabl
const PORT=process.env.PORT || 3300

app.use(express.static('public'))
app.use(express.json())



//set templates engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'resources/views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home') 
}),
app.use((req,res)=>{
    res.status(404).render('errors/errorPage')
})

//listening port
const server=app.listen(PORT,()=>{
          console.log(`listen at port ${PORT}`)
          })
