const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt=require('jsonwebtoken');

app.set('port',(process.env.PORT || 8091))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())

app.use('/api',api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use(function(req,res){
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/MentorOnDemandApp',{useNewUrlParser : true})

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('Connected to MongoDB')

    app.listen(app.get('port'),function(){
        console.log('API Server listening on port ' + app.get('port') + '!')
    })
})

