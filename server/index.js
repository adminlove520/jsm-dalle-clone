import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req, res) => {
  res.send('Dia dhuit ó DALL-E')
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () => {
      console.log('Tá an freastalaí tosaithe ar an bport http://localhost:8080')
    })
  } catch (error) {
    console.log(error)
  }
}
startServer()
