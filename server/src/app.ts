import express from 'express'
import cors from 'cors'
import { router as registrationRouter } from './registration'

const app = express()

const corsOptions = {
  origin: 'https://lucyhelder.nl'
}

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))
app.use(cors(corsOptions));

app.use('/registration', registrationRouter)

export default app