require ('dotenv').config()
const express= require ('express')
const app=express()
const port =3000
app.get('/',(req,res)=>{
    res.send('hellow world')
})
app.get('/twiter',(req,res)=>{
    res.send('twiter')
})
app.get('/google',(req,res)=>{
    res.send('<h2> google kya kr rha h </h2>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1> hellow youtube give me respose</h1>')
})

app.listen(process.env.port,()=>{
    console.log(`app listening ${port}`)
})