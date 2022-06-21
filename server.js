const express = require('express')
const mongoose = require("mongoose")
const Wish = require('./models/wishes')

const port = process.env.PORT || 3000

const app = express()

mongoose.connect("mongodb://MrProton:Ia3$uper@cluster0-shard-00-00.hu6ua.mongodb.net:27017,cluster0-shard-00-01.hu6ua.mongodb.net:27017,cluster0-shard-00-02.hu6ua.mongodb.net:27017/?ssl=true&replicaSet=atlas-p23u5q-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true})
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));



app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res) =>{
    res.sendFile('./index.html', {root:__dirname})
})

app.get('/puzzle.html',(req,res) =>{
    res.sendFile('./puzzle.html', {root:__dirname})
})

app.get('/wish.html',(req,res) =>{
    res.sendFile('./wish.html', {root:__dirname})
})

app.get('/final.html',(req,res) =>{
    res.sendFile('./final.html', {root:__dirname})
})

app.post('/wish.html', (req,res,next) => {
    const wish = new Wish(req.body)

    wish.save()
})




