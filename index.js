const express = require('express')
const app = express()

const post = require('./src/posts/post.model')

// provide an endpoint
app.get('/', function(req,res){
    return res.json(req)
})

app.get('/api/v1', function(req,res){
    return res.json(req.headers)
})

app.get('/api/v1/posts',function(req,res){
    return res.json([posts])
})

app.listen(3000, function(){
    console.log('dinedrop listening on port 3000')
    console.log('Connected to MySQL')
})