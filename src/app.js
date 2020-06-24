const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Public directory setup
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

//View engine and directory setup
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.render('404', {
        error: "The page you are looking for doesn't exist!"
    })
})

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})