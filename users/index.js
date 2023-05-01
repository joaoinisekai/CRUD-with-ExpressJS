const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    console.log(`Name: ${req.body.name}\nAge: ${req.body.age}`)
    console.log('---------')
    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`User: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})


module.exports = router