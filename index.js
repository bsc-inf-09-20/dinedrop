const express = require('express')
const app = express()



app.get('/api/v1/posts', function (req, res) {

        return res.json(result)
    })

/

app.listen(3000, function () {
    console.log('dinedrop listening on port 3000')

    dbConnection.connect(function (err) {
        if (err) throw err

        console.log("Connected to MySQL")
    })
})
