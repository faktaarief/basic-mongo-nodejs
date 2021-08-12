const express = require('express')
const { PORT } = require('./app/config')

require('./app/database')
const app = express()

const postRouter = require('./app/routes/post.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/posts', postRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
