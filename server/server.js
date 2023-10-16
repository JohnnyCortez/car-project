import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import router from './routes/items.js'
import cors from 'cors'

// import the router from your routes file
const app = express()
app.use(cors())
app.use(express.json())

app.use('/items', router)

// dotenv.config()
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Cars API</h1>')
})

const PORT = process.env.PORT || 3000

// app.use(express.json())

// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
// }
// else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'lightning.png')))
//     app.use(express.static('public'))
// }

// // specify the api path for the server to use


// if (process.env.NODE_ENV === 'production') {
//     app.get('/*', (_, res) =>
//         res.sendFile(path.resolve('public', 'index.html'))
//     )
// }

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})