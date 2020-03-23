const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Muito bem, muito bem!"
    })
})

app.listen(3333)