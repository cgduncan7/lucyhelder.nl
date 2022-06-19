import app from './app'

const port = process.env.PORT || 8899
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})