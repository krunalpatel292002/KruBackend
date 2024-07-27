require('dotenv').config()
const express = require('express')
// import express from 'express'
const app = express()


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('Krunal.com');
})

app.get('/login', (req,res)=>{
    res.send("<h1>Please logIn at krunal.com</h1>");
})

app.get('/youtube', (req,res)=>{
    res.send(`<a href="https://www.youtube.com/watch?v=ZVYLTdvm0ho">Grow with krunal</a>`);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
console.log("Krunal");  
