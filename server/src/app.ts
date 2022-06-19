import express from 'express'
import { router as registrationRouter } from './registration'

const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))

app.use('/registration', registrationRouter)

export default app