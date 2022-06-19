import { Router } from 'express'
import { registerPerson } from './controller'

const router = Router()

router.post('/', async (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    res.sendStatus(400)
  }

  try {
    await registerPerson({ name, email })
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(500)
  }
})

export default router