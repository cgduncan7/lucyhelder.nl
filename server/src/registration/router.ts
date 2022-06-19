import { Router } from 'express'
import { registerPerson } from './controller'

const router = Router()

router.post('/', async (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    res.status(400).send('Bad request')
  }

  try {
    await registerPerson({ name, email })
    res.status(200).send('Registered')
  } catch (err: any) {
    console.error(err.message)
    res.status(500).send('Internal server error')
  }
})

export default router